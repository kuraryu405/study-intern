// プロジェクトの型定義
interface Project {
  id: string;
  title: string;
  description: string;
  manday: number;
  status: 'todo' | 'in-progress' | 'completed';
  createdAt: Date;
}

// プロジェクト管理クラス
class ProjectManager {
  private projects: Project[] = [];
  private nextId = 1;

  constructor() {
    this.loadProjects();
    this.initializeApp();
  }

  // プロジェクトを追加
  addProject(title: string, description: string, manday: number): void {
    const project: Project = {
      id: `project-${this.nextId++}`,
      title,
      description,
      manday,
      status: 'todo',
      createdAt: new Date()
    };
    
    this.projects.push(project);
    this.saveProjects();
    this.renderProjects();
  }

  // プロジェクトのステータスを更新
  updateProjectStatus(id: string, status: Project['status']): void {
    const project = this.projects.find(p => p.id === id);
    if (project) {
      project.status = status;
      this.saveProjects();
      this.renderProjects();
    }
  }

  // プロジェクトを削除
  deleteProject(id: string): void {
    this.projects = this.projects.filter(p => p.id !== id);
    this.saveProjects();
    this.renderProjects();
  }

  // プロジェクトをステータス別に取得
  getProjectsByStatus(status: Project['status']): Project[] {
    return this.projects.filter(p => p.status === status);
  }

  // プロジェクトをローカルストレージに保存
  private saveProjects(): void {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  // ローカルストレージからプロジェクトを読み込み
  private loadProjects(): void {
    const saved = localStorage.getItem('projects');
    if (saved) {
      this.projects = JSON.parse(saved).map((p: any) => ({
        ...p,
        createdAt: new Date(p.createdAt)
      }));
      // 次のIDを設定
      this.nextId = Math.max(...this.projects.map(p => {
        const parts = p.id.split('-');
        return parts.length > 1 && parts[1] ? parseInt(parts[1]) : 0;
      }), 0) + 1;
    }
  }

  // アプリを初期化
  private initializeApp(): void {
    this.setupEventListeners();
    this.renderProjects();
  }

  // イベントリスナーを設定
  private setupEventListeners(): void {
    const form = document.querySelector('#project-input form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit(form);
      });
    }
  }

  // フォーム送信を処理
  private handleFormSubmit(form: HTMLFormElement): void {
    const title = (form.querySelector('#title') as HTMLInputElement).value;
    const description = (form.querySelector('#description') as HTMLTextAreaElement).value;
    const manday = parseInt((form.querySelector('#manday') as HTMLInputElement).value);

    if (title && description && manday > 0) {
      this.addProject(title, description, manday);
      form.reset();
    } else {
      alert('すべてのフィールドを正しく入力してください。');
    }
  }

  // プロジェクト一覧を描画
  private renderProjects(): void {
    const app = document.getElementById('app');
    if (!app) return;

    const statuses: { status: Project['status']; title: string }[] = [
      { status: 'todo', title: '未着手' },
      { status: 'in-progress', title: '進行中' },
      { status: 'completed', title: '完了' }
    ];

    app.innerHTML = `
      <div class="project-input-container">
        <h1>プロジェクト管理</h1>
        <div id="project-input-container">
          ${document.querySelector('#project-input')?.innerHTML || ''}
        </div>
      </div>
      <div class="projects-container">
        ${statuses.map(({ status, title }) => this.renderProjectList(status, title)).join('')}
      </div>
    `;

    // イベントリスナーを再設定
    this.setupEventListeners();
    this.setupProjectEventListeners();
  }

  // プロジェクトリストを描画
  private renderProjectList(status: Project['status'], title: string): string {
    const projects = this.getProjectsByStatus(status);
    
    return `
      <section class="projects">
        <header>
          <h2>${title} (${projects.length})</h2>
        </header>
        <ul>
          ${projects.map(project => this.renderSingleProject(project)).join('')}
        </ul>
      </section>
    `;
  }

  // 単一プロジェクトを描画
  private renderSingleProject(project: Project): string {
    const statusButtons = this.getStatusButtons(project);
    
    return `
      <li class="project-item">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-meta">
            <span class="manday">人日: ${project.manday}</span>
            <span class="created">作成日: ${project.createdAt.toLocaleDateString('ja-JP')}</span>
          </div>
        </div>
        <div class="project-actions">
          ${statusButtons}
          <button onclick="projectManager.deleteProject('${project.id}')" class="delete-btn">削除</button>
        </div>
      </li>
    `;
  }

  // ステータスボタンを取得
  private getStatusButtons(project: Project): string {
    const statuses: { status: Project['status']; label: string }[] = [
      { status: 'todo', label: '未着手' },
      { status: 'in-progress', label: '進行中' },
      { status: 'completed', label: '完了' }
    ];

    return statuses
      .filter(({ status }) => status !== project.status)
      .map(({ status, label }) => 
        `<button onclick="projectManager.updateProjectStatus('${project.id}', '${status}')" class="status-btn">${label}に変更</button>`
      ).join('');
  }

  // プロジェクトのイベントリスナーを設定
  private setupProjectEventListeners(): void {
    // グローバルスコープにprojectManagerを設定
    (window as any).projectManager = this;
  }
}

// アプリを開始
document.addEventListener('DOMContentLoaded', () => {
  new ProjectManager();
});
