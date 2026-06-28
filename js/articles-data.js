// js/articles-data.js
// 所有文章数据集中存放于此，index.html 和 articles.html 共用
// id 按时间顺序连续编号，新增文章直接追加在末尾

const articlesData = [

    // ============================================================
    // 一、番剧汇总（按时间从旧到新，id 1~18）
    // ============================================================
    { 
        id: 1, 
        title: '2022年以前番剧汇总', 
        category: '番剧汇总', 
        date: '2022-01-01', 
        summary: '我看过的2022年以前番剧汇总。', 
        image: 'https://picsum.photos/seed/summary2022/400/300', 
        link: 'articles/番剧感想/2022年以前番剧汇总.html',
        content: '' 
    },
    { 
        id: 2, 
        title: '2022秋季番剧总览', 
        category: '番剧汇总', 
        date: '2022-10-01', 
        summary: '我看过的2022年秋季番剧汇总。', 
        image: 'https://picsum.photos/seed/2022autumn/400/300', 
        link: 'articles/番剧感想/2022秋季番剧总览.html',
        content: '' 
    },
    { 
        id: 3, 
        title: '2023冬季番剧总览', 
        category: '番剧汇总', 
        date: '2023-01-15', 
        summary: '我看过的2023年冬季番剧汇总。', 
        image: 'https://picsum.photos/seed/2023winter/400/300', 
        link: 'articles/番剧感想/2023冬季番剧总览.html',
        content: '' 
    },
    { 
        id: 4, 
        title: '2023春季番剧总览', 
        category: '番剧汇总', 
        date: '2023-04-01', 
        summary: '我看过的2023年春季番剧汇总。', 
        image: 'https://picsum.photos/seed/2023spring/400/300', 
        link: 'articles/番剧感想/2023春季番剧总览.html',
        content: '' 
    },
    { 
        id: 5, 
        title: '2023夏季番剧总览', 
        category: '番剧汇总', 
        date: '2023-07-01', 
        summary: '我看过的2023年夏季番剧汇总。', 
        image: 'https://picsum.photos/seed/2023summer/400/300', 
        link: 'articles/番剧感想/2023夏季番剧总览.html',
        content: '' 
    },
    { 
        id: 6, 
        title: '2023秋季番剧总览', 
        category: '番剧汇总', 
        date: '2023-10-01', 
        summary: '我看过的2023年秋季番剧汇总。', 
        image: 'https://picsum.photos/seed/2023autumn/400/300', 
        link: 'articles/番剧感想/2023秋季番剧总览.html',
        content: '' 
    },
    { 
        id: 7, 
        title: '2024冬季番剧总览', 
        category: '番剧汇总', 
        date: '2024-01-15', 
        summary: '我看过的2024年冬季番剧汇总。', 
        image: 'https://picsum.photos/seed/2024winter/400/300', 
        link: 'articles/番剧感想/2024冬季番剧总览.html',
        content: '' 
    },
    { 
        id: 8, 
        title: '2024春季番剧总览', 
        category: '番剧汇总', 
        date: '2024-04-01', 
        summary: '我看过的2024年春季番剧汇总。', 
        image: 'https://picsum.photos/seed/2024spring/400/300', 
        link: 'articles/番剧感想/2024春季番剧总览.html',
        content: '' 
    },
    { 
        id: 9, 
        title: '2024夏季番剧总览', 
        category: '番剧汇总', 
        date: '2024-07-01', 
        summary: '我看过的2024年夏季番剧汇总。', 
        image: 'https://picsum.photos/seed/2024summer/400/300', 
        link: 'articles/番剧感想/2024夏季番剧总览.html',
        content: '' 
    },
    { 
        id: 10, 
        title: '2024秋季番剧总览', 
        category: '番剧汇总', 
        date: '2024-10-01', 
        summary: '我看过的2024年秋季番剧汇总。', 
        image: 'https://picsum.photos/seed/2024autumn/400/300', 
        link: 'articles/番剧感想/2024秋季番剧总览.html',
        content: '' 
    },
    { 
        id: 11, 
        title: '2025冬季番剧总览', 
        category: '番剧汇总', 
        date: '2025-01-15', 
        summary: '我看过的2025年冬季番剧汇总，共10部。', 
        image: 'https://picsum.photos/seed/2025winter/400/300', 
        link: 'articles/番剧感想/2025冬季番剧总览.html',
        content: '' 
    },
    { 
        id: 12, 
        title: '2025春季番剧总览', 
        category: '番剧汇总', 
        date: '2025-04-01', 
        summary: '我看过的2025年春季番剧汇总，共12部。', 
        image: 'https://picsum.photos/seed/2025spring/400/300', 
        link: 'articles/番剧感想/2025春季番剧总览.html',
        content: '' 
    },
    { 
        id: 13, 
        title: '2025夏季番剧总览', 
        category: '番剧汇总', 
        date: '2025-07-01', 
        summary: '我看过的2025年夏季番剧汇总，共10部。', 
        image: 'https://picsum.photos/seed/2025summer/400/300', 
        link: 'articles/番剧感想/2025夏季番剧总览.html',
        content: '' 
    },
    { 
        id: 14, 
        title: '2025秋季番剧总览', 
        category: '番剧汇总', 
        date: '2025-10-01', 
        summary: '我看过的2025年秋季番剧汇总，共11部。', 
        image: 'https://picsum.photos/seed/2025autumn/400/300', 
        link: 'articles/番剧感想/2025秋季番剧总览.html',
        content: '' 
    },
    { 
        id: 15, 
        title: '2026冬季番剧总览', 
        category: '番剧汇总', 
        date: '2026-01-15', 
        summary: '我看过的2026年冬季番剧汇总，共14部。', 
        image: 'https://picsum.photos/seed/2026winter/400/300', 
        link: 'articles/番剧感想/2026冬季番剧总览.html',
        content: '' 
    },
    { 
        id: 16, 
        title: '2026春季番剧总览', 
        category: '番剧汇总', 
        date: '2026-04-01', 
        summary: '我看过的2026年春季番剧汇总，共15部。', 
        image: 'https://picsum.photos/seed/2026spring/400/300', 
        link: 'articles/番剧感想/2026春季番剧总览.html',
        content: '' 
    },
    { 
        id: 17, 
        title: '2026夏季番剧总览', 
        category: '番剧汇总', 
        date: '2026-07-01', 
        summary: '我看过的2026年夏季番剧汇总（待补）。', 
        image: 'https://picsum.photos/seed/2026summer/400/300', 
        link: 'articles/番剧感想/2026夏季番剧总览.html',
        content: '' 
    },
    { 
        id: 18, 
        title: '恶役千金题材番剧总览', 
        category: '番剧汇总', 
        date: '2026-06-26', 
        summary: '我看过的恶役千金题材番剧汇总，共15部。', 
        image: 'https://picsum.photos/seed/villainess/400/300', 
        link: 'articles/番剧感想/恶役千金系列.html',
        content: '' 
    },

    // ============================================================
    // 二、番剧感想（按时间顺序继续编号，id 19~）
    // ============================================================
    { 
        id: 19, 
        title: 'BOSS女王第二季 感想', 
        category: '番剧感想', 
        date: '2026-06-28', 
        summary: '身为悲剧始作俑者的最强邪恶BOSS女王为民竭心尽力第二季 个人感想。', 
        image: 'https://picsum.photos/seed/bossqueen/400/300', 
        link: 'articles/番剧感想/BOSS女王第二季.html',
        content: '这里是正文纯文本，用于全文搜索...' 
    },
    // ... 更多感想（按时间顺序追加，id 继续递增）
];
