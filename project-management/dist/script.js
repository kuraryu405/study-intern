// プロジェクト管理クラス
class ProjectManager {
    constructor() {
        this.projects = [];
        this.nextId = 1;
        this.loadProjects();
        this.initializeApp();
    }
    // プロジェクトを追加
    addProject(title, description, manday) {
        const project = {
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
    updateProjectStatus(id, status) {
        const project = this.projects.find(p => p.id === id);
        if (project) {
            project.status = status;
            this.saveProjects();
            this.renderProjects();
        }
    }
    // プロジェクトを削除
    deleteProject(id) {
        this.projects = this.projects.filter(p => p.id !== id);
        this.saveProjects();
        this.renderProjects();
    }
    // プロジェクトをステータス別に取得
    getProjectsByStatus(status) {
        return this.projects.filter(p => p.status === status);
    }
    // プロジェクトをローカルストレージに保存
    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }
    // ローカルストレージからプロジェクトを読み込み
    loadProjects() {
        const saved = localStorage.getItem('projects');
        if (saved) {
            this.projects = JSON.parse(saved).map((p) => (Object.assign(Object.assign({}, p), { createdAt: new Date(p.createdAt) })));
            // 次のIDを設定
            this.nextId = Math.max(...this.projects.map(p => {
                const parts = p.id.split('-');
                return parts.length > 1 && parts[1] ? parseInt(parts[1]) : 0;
            }), 0) + 1;
        }
    }
    // アプリを初期化
    initializeApp() {
        this.setupEventListeners();
        this.renderProjects();
    }
    // イベントリスナーを設定
    setupEventListeners() {
        const form = document.querySelector('#project-input form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(form);
            });
        }
    }
    // フォーム送信を処理
    handleFormSubmit(form) {
        const title = form.querySelector('#title').value;
        const description = form.querySelector('#description').value;
        const manday = parseInt(form.querySelector('#manday').value);
        if (title && description && manday > 0) {
            this.addProject(title, description, manday);
            form.reset();
        }
        else {
            alert('すべてのフィールドを正しく入力してください。');
        }
    }
    // プロジェクト一覧を描画
    renderProjects() {
        var _a;
        const app = document.getElementById('app');
        if (!app)
            return;
        const statuses = [
            { status: 'todo', title: '未着手' },
            { status: 'in-progress', title: '進行中' },
            { status: 'completed', title: '完了' }
        ];
        app.innerHTML = `
      <div class="project-input-container">
        <h1>プロジェクト管理</h1>
        <div id="project-input-container">
          ${((_a = document.querySelector('#project-input')) === null || _a === void 0 ? void 0 : _a.innerHTML) || ''}
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
    renderProjectList(status, title) {
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
    renderSingleProject(project) {
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
    getStatusButtons(project) {
        const statuses = [
            { status: 'todo', label: '未着手' },
            { status: 'in-progress', label: '進行中' },
            { status: 'completed', label: '完了' }
        ];
        return statuses
            .filter(({ status }) => status !== project.status)
            .map(({ status, label }) => `<button onclick="projectManager.updateProjectStatus('${project.id}', '${status}')" class="status-btn">${label}に変更</button>`).join('');
    }
    // プロジェクトのイベントリスナーを設定
    setupProjectEventListeners() {
        // グローバルスコープにprojectManagerを設定
        window.projectManager = this;
    }
}
// アプリを開始
document.addEventListener('DOMContentLoaded', () => {
    new ProjectManager();
});
export {};
//# sourceMappingURL=script.js.map