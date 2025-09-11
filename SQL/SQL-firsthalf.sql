CREATE TABLE members
    (
        id     INTEGER NOT NULL,
        name   CHAR(32),
        height REAL,
        weight REAL,
        age INTEGER,
        job_id INTEGER,
        PRIMARY KEY (id)
    )
;

CREATE TABLE jobs
    (
        id     INTEGER NOT NULL,
        name   CHAR(32),
        salary INTEGER,
        PRIMARY KEY (id)
    )
 ;

-- 入力部分
INSERT
    INTO members(id, name, height, weight, age, job_id)
    VALUES
        (1, '佐藤', 170.2, 65.2, 60, 4),
        (2, '鈴木', 151.5, 50.3, 53, 2),
        (3, '高橋', 182.1, 85.1, 31, 8),
        (4, '田中', 163.5, 70.6, 36, 3),
        (5, '渡辺', 157.8, 55.8, 62, 7),
        (6, '伊藤', 173.0, 65.3, 75, 1),
        (7, '山本', 166.4, 49.1, 25, 5),
        (8, '中村', 144.1, 56.9, 45, 7),
        (9, '小林', 168.7, 90.1, 38, 3),
        (10, '加藤', 178.6, 78.5, 26, 6)
;
        
INSERT
    INTO jobs(id, name, salary)
    VALUES
        (1, '医師', 1232),
        (2, '弁護士', 1028),
        (3, 'SE', 515),
        (4, '会計士', 1024),
        (5, '薬剤師', 542),
        (6, '保育士', 341),
        (7, '大学教授', 1050),
        (8, '塾講師', 361)
;
