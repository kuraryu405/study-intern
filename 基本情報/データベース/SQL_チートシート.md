# SQL チートシート

## 目次
1. [基本的なSELECT文](#基本的なselect文)
2. [WHERE句と条件指定](#where句と条件指定)
3. [JOIN（結合）](#join結合)
4. [集計関数](#集計関数)
5. [GROUP BYとHAVING](#group-byとhaving)
6. [INSERT・UPDATE・DELETE](#insert・update・delete)
7. [テーブル操作](#テーブル操作)
8. [インデックスと制約](#インデックスと制約)
9. [よく使う関数](#よく使う関数)
10. [実用的な例](#実用的な例)

---

## 基本的なSELECT文

### 基本的な構文
```sql
SELECT カラム名1, カラム名2, ...
FROM テーブル名
WHERE 条件
ORDER BY カラム名
LIMIT 件数;
```

### 全カラムを取得
```sql
SELECT * FROM users;
```

### 特定のカラムを取得
```sql
SELECT id, name, email FROM users;
```

### カラムにエイリアスを付ける
```sql
SELECT 
    id AS user_id,
    name AS user_name,
    email AS user_email
FROM users;
```

### DISTINCTで重複を除去
```sql
SELECT DISTINCT department FROM employees;
```

---

## WHERE句と条件指定

### 基本的な条件
```sql
-- 等しい
SELECT * FROM users WHERE age = 25;

-- 等しくない
SELECT * FROM users WHERE age != 25;
SELECT * FROM users WHERE age <> 25;

-- より大きい・小さい
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE age >= 25;
SELECT * FROM users WHERE age < 25;
SELECT * FROM users WHERE age <= 25;
```

### 文字列の条件
```sql
-- 完全一致
SELECT * FROM users WHERE name = '田中';

-- 部分一致（LIKE）
SELECT * FROM users WHERE name LIKE '%田中%';  -- 田中を含む
SELECT * FROM users WHERE name LIKE '田中%';   -- 田中で始まる
SELECT * FROM users WHERE name LIKE '%田中';   -- 田中で終わる

-- ワイルドカード
SELECT * FROM users WHERE name LIKE '田中_';   -- 田中+1文字
SELECT * FROM users WHERE name LIKE '田中__';  -- 田中+2文字
```

### 複数条件の組み合わせ
```sql
-- AND（かつ）
SELECT * FROM users WHERE age >= 20 AND age <= 30;

-- OR（または）
SELECT * FROM users WHERE department = '営業' OR department = '開発';

-- NOT（否定）
SELECT * FROM users WHERE NOT department = '営業';

-- 括弧でグループ化
SELECT * FROM users 
WHERE (age >= 20 AND age <= 30) 
   OR (department = '営業' AND experience >= 5);
```

### NULLの扱い
```sql
-- NULLかどうか
SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;
```

### IN句
```sql
-- 複数の値のいずれかに一致
SELECT * FROM users WHERE department IN ('営業', '開発', '企画');

-- サブクエリと組み合わせ
SELECT * FROM users WHERE department IN (
    SELECT department FROM departments WHERE active = true
);
```

### BETWEEN句
```sql
-- 範囲指定
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM users WHERE created_at BETWEEN '2023-01-01' AND '2023-12-31';
```

---

## JOIN（結合）

### INNER JOIN（内部結合）
```sql
-- 基本的な内部結合
SELECT u.name, d.department_name
FROM users u
INNER JOIN departments d ON u.department_id = d.id;

-- 複数テーブルの結合
SELECT 
    u.name,
    d.department_name,
    p.project_name
FROM users u
INNER JOIN departments d ON u.department_id = d.id
INNER JOIN projects p ON u.project_id = p.id;
```

### LEFT JOIN（左外部結合）
```sql
-- 左テーブルの全レコードを取得（右テーブルにマッチしないものはNULL）
SELECT u.name, d.department_name
FROM users u
LEFT JOIN departments d ON u.department_id = d.id;
```

### RIGHT JOIN（右外部結合）
```sql
-- 右テーブルの全レコードを取得（左テーブルにマッチしないものはNULL）
SELECT u.name, d.department_name
FROM users u
RIGHT JOIN departments d ON u.department_id = d.id;
```

### FULL OUTER JOIN（完全外部結合）
```sql
-- 両方のテーブルの全レコードを取得
SELECT u.name, d.department_name
FROM users u
FULL OUTER JOIN departments d ON u.department_id = d.id;
```

### 自己結合
```sql
-- 同じテーブル内での結合
SELECT 
    e1.name AS employee_name,
    e2.name AS manager_name
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;
```

---

## 集計関数

### 基本的な集計関数
```sql
-- 件数
SELECT COUNT(*) FROM users;

-- 特定カラムの件数（NULLを除く）
SELECT COUNT(email) FROM users;

-- 合計
SELECT SUM(salary) FROM employees;

-- 平均
SELECT AVG(salary) FROM employees;

-- 最大値
SELECT MAX(salary) FROM employees;

-- 最小値
SELECT MIN(salary) FROM employees;
```

### 複数の集計関数を同時に使用
```sql
SELECT 
    COUNT(*) AS total_count,
    AVG(salary) AS avg_salary,
    MAX(salary) AS max_salary,
    MIN(salary) AS min_salary,
    SUM(salary) AS total_salary
FROM employees;
```

---

## GROUP BYとHAVING

### GROUP BYの基本
```sql
-- 部署別の平均給与
SELECT 
    department,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

### HAVING句
```sql
-- 部署別の平均給与（平均30万以上のみ）
SELECT 
    department,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) >= 300000;
```

### 複数カラムでのグループ化
```sql
-- 部署・年齢層別の平均給与
SELECT 
    department,
    CASE 
        WHEN age < 30 THEN '20代'
        WHEN age < 40 THEN '30代'
        ELSE '40代以上'
    END AS age_group,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department, age_group;
```

---

## INSERT・UPDATE・DELETE

### INSERT文
```sql
-- 単一レコードの挿入
INSERT INTO users (name, email, age) 
VALUES ('田中太郎', 'tanaka@example.com', 25);

-- 複数レコードの挿入
INSERT INTO users (name, email, age) VALUES 
    ('田中太郎', 'tanaka@example.com', 25),
    ('佐藤花子', 'sato@example.com', 30),
    ('鈴木一郎', 'suzuki@example.com', 28);

-- 別テーブルからデータを挿入
INSERT INTO users_backup (name, email, age)
SELECT name, email, age FROM users WHERE created_at < '2023-01-01';
```

### UPDATE文
```sql
-- 基本的な更新
UPDATE users SET age = 26 WHERE id = 1;

-- 複数カラムの更新
UPDATE users SET 
    age = 26,
    email = 'new_email@example.com',
    updated_at = CURRENT_TIMESTAMP
WHERE id = 1;

-- 条件付き更新
UPDATE employees SET salary = salary * 1.1 WHERE department = '営業';
```

### DELETE文
```sql
-- 条件付き削除
DELETE FROM users WHERE id = 1;

-- 全件削除（注意！）
DELETE FROM users;

-- 別テーブルとの結合で削除
DELETE u FROM users u
INNER JOIN inactive_users iu ON u.id = iu.user_id;
```

---

## テーブル操作

### テーブルの作成
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### テーブルの変更
```sql
-- カラムの追加
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- カラムの削除
ALTER TABLE users DROP COLUMN phone;

-- カラムの変更
ALTER TABLE users MODIFY COLUMN age INT NOT NULL DEFAULT 0;

-- カラム名の変更
ALTER TABLE users CHANGE COLUMN age user_age INT;
```

### テーブルの削除
```sql
-- テーブルの削除
DROP TABLE users;

-- テーブルの内容のみ削除（構造は保持）
TRUNCATE TABLE users;
```

---

## インデックスと制約

### インデックスの作成
```sql
-- 単一カラムのインデックス
CREATE INDEX idx_users_email ON users(email);

-- 複合インデックス
CREATE INDEX idx_users_department_age ON users(department, age);

-- ユニークインデックス
CREATE UNIQUE INDEX idx_users_email ON users(email);
```

### 制約の追加
```sql
-- 外部キー制約
ALTER TABLE users 
ADD CONSTRAINT fk_users_department 
FOREIGN KEY (department_id) REFERENCES departments(id);

-- チェック制約
ALTER TABLE users 
ADD CONSTRAINT chk_users_age 
CHECK (age >= 0 AND age <= 150);
```

---

## よく使う関数

### 文字列関数
```sql
-- 文字列の連結
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;

-- 大文字・小文字変換
SELECT UPPER(name) AS upper_name, LOWER(name) AS lower_name FROM users;

-- 文字列の長さ
SELECT LENGTH(name) AS name_length FROM users;

-- 部分文字列
SELECT SUBSTRING(name, 1, 3) AS name_part FROM users;
```

### 数値関数
```sql
-- 四捨五入
SELECT ROUND(salary, -3) AS rounded_salary FROM employees;

-- 切り上げ・切り捨て
SELECT CEIL(salary/1000) AS ceil_salary, FLOOR(salary/1000) AS floor_salary FROM employees;

-- 絶対値
SELECT ABS(balance) FROM accounts;
```

### 日付関数
```sql
-- 現在の日時
SELECT NOW(), CURRENT_TIMESTAMP, CURDATE(), CURTIME();

-- 日付の加算・減算
SELECT DATE_ADD(birth_date, INTERVAL 1 YEAR) AS next_birthday FROM users;

-- 日付の差分
SELECT DATEDIFF(end_date, start_date) AS duration FROM projects;

-- 日付の部分取得
SELECT YEAR(created_at), MONTH(created_at), DAY(created_at) FROM users;
```

### 条件分岐
```sql
-- CASE文
SELECT 
    name,
    CASE 
        WHEN age < 20 THEN '未成年'
        WHEN age < 65 THEN '現役'
        ELSE 'シニア'
    END AS age_category
FROM users;

-- IF文
SELECT name, IF(age >= 20, '成人', '未成年') AS status FROM users;

-- NULLIF
SELECT NULLIF(column1, column2) FROM table1;
```

---

## 実用的な例

### 売上分析クエリ
```sql
-- 月別・商品別の売上集計
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    p.product_name,
    COUNT(*) AS order_count,
    SUM(od.quantity * od.unit_price) AS total_sales
FROM orders o
INNER JOIN order_details od ON o.id = od.order_id
INNER JOIN products p ON od.product_id = p.id
WHERE o.order_date >= '2023-01-01'
GROUP BY month, p.product_name
HAVING total_sales >= 100000
ORDER BY month, total_sales DESC;
```

### ランキングクエリ
```sql
-- 部署別の給与ランキング
SELECT 
    name,
    department,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
    RANK() OVER (ORDER BY salary DESC) AS overall_rank
FROM employees;
```

### 時系列分析クエリ
```sql
-- 連続ログイン日数の計算
WITH login_streaks AS (
    SELECT 
        user_id,
        login_date,
        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) AS rn,
        DATE_SUB(login_date, INTERVAL ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) DAY) AS grp
    FROM user_logins
)
SELECT 
    user_id,
    COUNT(*) AS streak_length
FROM login_streaks
GROUP BY user_id, grp
ORDER BY streak_length DESC;
```

### パフォーマンス最適化のヒント
```sql
-- インデックスの確認
SHOW INDEX FROM users;

-- クエリの実行計画
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- スロークエリログの確認
SHOW VARIABLES LIKE 'slow_query_log';
SHOW VARIABLES LIKE 'long_query_time';
```

---

## よくあるエラーと対処法

### よくあるエラー
```sql
-- エラー: Unknown column 'column_name' in 'where clause'
-- 対処: カラム名のスペルミスを確認

-- エラー: You have an error in your SQL syntax
-- 対処: 構文エラー、特にカンマや括弧の確認

-- エラー: Duplicate entry for key
-- 対処: ユニーク制約違反、重複データの確認

-- エラー: Cannot add foreign key constraint
-- 対処: 参照先テーブルの存在確認、データ型の一致確認
```

---

## ベストプラクティス

### パフォーマンス
- 必要なカラムのみをSELECTする（`SELECT *`は避ける）
- 適切なインデックスを作成する
- 大量データの場合はLIMITを使用する
- JOINは必要最小限にする

### セキュリティ
- プリペアドステートメントを使用する
- ユーザー入力は必ずサニタイズする
- 最小権限の原則に従う

### 可読性
- 適切なインデントと改行を使用する
- 意味のあるエイリアス名を使用する
- 複雑なクエリはコメントを追加する

---

## 参考資料
- [MySQL公式ドキュメント](https://dev.mysql.com/doc/)
- [PostgreSQL公式ドキュメント](https://www.postgresql.org/docs/)
- [SQLite公式ドキュメント](https://www.sqlite.org/docs.html)

---

*このチートシートは基本的なSQLの操作を網羅していますが、実際の使用時は各データベースの公式ドキュメントも参照してください。*
