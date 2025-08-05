// 教学工具脚本 - 中文版
document.addEventListener('DOMContentLoaded', () => {
    const toolsGrid = document.getElementById('toolsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const emptyState = document.getElementById('emptyState');
    const resetBtn = document.getElementById('btnResetSearch');

    // 工具数据
    const tools = [
        {
            icon: 'fa-solid fa-list-check',
            title: '课堂小结卡',
            description: '创建课后快速评估，检查学生理解情况。',
            category: 'assessment',
            isFavorited: false,
            formFields: [],
            actions: [{
                name: 'openLink',
                label: '打开工具',
                type: 'primary',
                url: 'https://yuanqi.tencent.com/agent/LL0m3lQv0zo8'
            }]
        },
        {
            icon: 'fa-solid fa-align-left',
            title: '文本难度调整',
            description: '调整文本的阅读难度，使其更复杂或更简单。',
            category: 'planning',
            isFavorited: true,
            formFields: ['textarea'],
            actions: [
                {
                    name: 'openLink',
                    label: '英文文本',
                    type: 'primary',
                    url: 'https://yuanqi.tencent.com/agent/FSZ7T7x3Sqa8'
                },
                {
                    name: 'openLink',
                    label: '中文文本',
                    type: 'primary',
                    url: 'https://yuanqi.tencent.com/agent/iomAX06eLMBI'
                }
            ]
        },
        {
            icon: 'fa-solid fa-bars',
            title: '文本分段',
            description: '将复杂文本分解为易于理解的部分，帮助学生更好地理解。',
            category: 'planning',
            isFavorited: false,
            formFields: [],
            actions: [
                {
                    name: 'openLink',
                    label: '长文本',
                    type: 'primary',
                    url: 'https://yuanqi.tencent.com/agent/VGG01iZUTK8j'
                },
                {
                    name: 'openLink',
                    label: '短文本',
                    type: 'primary',
                    url: './pa-template/index.html'
                }
            ]
        },
        {
            icon: 'fa-solid fa-anchor',
            title: '内容关联生成',
            description: '将课程内容与学生生活和兴趣关联，提升参与度。',
            category: 'planning',
            isFavorited: false,
            formFields: [],
            actions: [{
                name: 'openLink',
                label: '获取智能体',
                type: 'primary',
                url: 'https://yuanqi.tencent.com/agent/AbYoIQ1jMG3m'
            }]
        },
        {
            icon: 'fa-solid fa-tasks',
            title: '清晰指令生成',
            description: '为作业和活动生成简明易懂的指令。',
            category: 'assessment',
            isFavorited: false,
            formFields: [],
            actions: [{
                name: 'openLink',
                label: '获取智能体',
                type: 'primary',
                url: 'https://yuanqi.tencent.com/agent/UpGCq8RLnn4y'
            }]
        },
        {
            icon: 'fa-solid fa-hand',
            title: '课程导入设计',
            description: '设计有吸引力的课程导入，激发学生兴趣。',
            category: 'engagement',
            isFavorited: false,
            formFields: [],
            actions: [{
                name: 'openLink',
                label: '获取智能体',
                type: 'primary',
                url: 'https://yuanqi.tencent.com/agent/Zv63iKK9MgWl'
            }]
        },
        {
            icon: 'fa-solid fa-ticket',
            title: '选择题评估生成',
            description: '创建多种主题的选择题评估。',
            category: 'assessment',
            isFavorited: false,
            formFields: [],
            actions: [{
                name: 'openLink',
                label: '获取智能体',
                type: 'primary',
                url: 'https://yuanqi.tencent.com/agent/AolEMzp3h0jy'
            }]
        },
        {
            icon: 'fa-solid fa-comments',
            title: '讨论引导语生成',
            description: '设计有趣的讨论引导语，促进课堂交流。',
            category: 'engagement',
            isFavorited: false,
            formFields: [],
            actions: [{
                name: 'openLink',
                label: '获取智能体',
                type: 'primary',
                url: 'https://yuanqi.tencent.com/agent/s8hZA9JPvhk7'
            }]
        },
        {
            icon: 'fa-solid fa-ruler',
            title: '表现性任务设计工具',
            description: '设计真实的表现性任务，评估学生的深度理解。',
            category: 'engagement',
            isFavorited: false,
            formFields: [],
            actions: [{
                name: 'openLink',
                label: '获取智能体',
                type: 'primary',
                url: 'https://yuanqi.tencent.com/agent/g6EqCe7eKo2o'
            }]
        }
    ];

    // 获取分类图标和名称
    function getCategoryBadge(category) {
        let icon, name;
        switch (category) {
            case 'planning':
                icon = 'fa-solid fa-file-lines';
                name = '课程设计';
                break;
            case 'assessment':
                icon = 'fa-solid fa-chart-simple';
                name = '评估工具';
                break;
            case 'engagement':
                icon = 'fa-solid fa-users';
                name = '课堂互动';
                break;
            default:
                icon = 'fa-solid fa-tag';
                name = category;
        }
        return `<i class="${icon}"></i>${name}`;
    }

    // 创建工具卡片
    function createToolCard(tool) {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.style.opacity = '1';
        card.dataset.category = tool.category;

        const header = document.createElement('div');
        header.className = 'tool-header';

        const icon = document.createElement('div');
        icon.className = 'tool-icon';
        icon.innerHTML = `<i class="${tool.icon}"></i>`;

        const title = document.createElement('h3');
        title.className = 'tool-title';
        title.textContent = tool.title;

        header.appendChild(icon);
        header.appendChild(title);

        const content = document.createElement('div');
        content.className = 'tool-content';

        const description = document.createElement('p');
        description.className = 'tool-description';
        description.textContent = tool.description;

        const badge = document.createElement('span');
        badge.className = `badge badge-${tool.category}`;
        badge.innerHTML = getCategoryBadge(tool.category);

        content.appendChild(description);
        content.appendChild(badge);

        const footer = document.createElement('div');
        footer.className = 'tool-footer';

        // 添加操作按钮
        if (tool.actions && tool.actions.length > 0) {
            tool.actions.forEach(action => {
                const btn = document.createElement('button');
                btn.className = action.type === 'primary' ? 'tool-btn' : 'tool-btn secondary';
                
                if (action.label === '英文文本') {
                    btn.classList.add('english-text-btn');
                } else if (action.label === '中文文本') {
                    btn.classList.add('chinese-text-btn');
                }

                let iconClass = '';
                switch (action.name) {
                    case 'openLink':
                        if (action.label === '长文本') {
                            iconClass = 'fa-solid fa-link';
                        } else if (action.label === '短文本') {
                            iconClass = 'fa-solid fa-align-center';
                        } else if (action.label === '获取智能体') {
                            iconClass = 'fa-solid fa-robot';
                        } else if (action.label === '英文文本') {
                            iconClass = 'fa-solid fa-language';
                        } else if (action.label === '中文文本') {
                            iconClass = 'fa-solid fa-language';
                        } else {
                            iconClass = 'fa-solid fa-calendar-days';
                        }
                        break;
                    default:
                        iconClass = 'fa-solid fa-arrow-right';
                }

                btn.innerHTML = `<i class="${iconClass}"></i> ${action.label}`;
                btn.addEventListener('click', () => {
                    if (action.url) {
                        window.open(action.url, '_blank');
                    } else {
                        window.open('./pa-template/index.html', '_blank');
                    }
                });
                footer.appendChild(btn);
            });
        }

        // 添加收藏按钮
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'add-to-list-btn';
        favoriteBtn.setAttribute('aria-label', 'Add to favorites');
        favoriteBtn.innerHTML = '<i class="fa-regular fa-star"></i>';

        const isFavorited = localStorage.getItem('tool_' + tool.title) === 'true';
        if (isFavorited) {
            favoriteBtn.classList.add('added');
            favoriteBtn.innerHTML = '<i class="fa-solid fa-star"></i>';
            favoriteBtn.setAttribute('aria-label', 'Remove from favorites');
        }

        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isCurrentlyFavorited = favoriteBtn.classList.contains('added');
            if (isCurrentlyFavorited) {
                favoriteBtn.classList.remove('added');
                favoriteBtn.innerHTML = '<i class="fa-regular fa-star"></i>';
                favoriteBtn.setAttribute('aria-label', 'Add to favorites');
                localStorage.removeItem('tool_' + tool.title);
            } else {
                favoriteBtn.classList.add('added');
                favoriteBtn.innerHTML = '<i class="fa-solid fa-star"></i>';
                favoriteBtn.setAttribute('aria-label', 'Remove from favorites');
                localStorage.setItem('tool_' + tool.title, 'true');
            }
        });

        footer.appendChild(favoriteBtn);

        card.appendChild(header);
        card.appendChild(content);
        card.appendChild(footer);

        return card;
    }

    // 渲染工具
    function renderTools(toolsToRender) {
        toolsGrid.innerHTML = '';
        if (toolsToRender.length === 0) {
            emptyState.style.display = 'flex';
            toolsGrid.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            toolsGrid.style.display = 'grid';
            toolsToRender.forEach(tool => {
                const toolCard = createToolCard(tool);
                toolsGrid.appendChild(toolCard);
            });
        }
    }

    // 搜索功能
    searchInput.addEventListener('input', () => {
        filterTools();
    });

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterTools();
        searchInput.focus();
    });

    function filterTools() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        const filteredTools = tools.filter(tool => {
            const matchesSearch = tool.title.toLowerCase().includes(searchTerm) || 
                                tool.description.toLowerCase().includes(searchTerm);
            
            let matchesCategory = true;
            if (activeCategory === 'my-list') {
                matchesCategory = localStorage.getItem('tool_' + tool.title) === 'true';
            } else if (activeCategory !== 'all') {
                matchesCategory = tool.category === activeCategory;
            }
            
            return matchesSearch && matchesCategory;
        });
        
        renderTools(filteredTools);
    }

    // 分类按钮事件
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterTools();
        });
    });

    // 初始化
    setTimeout(() => {
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        const allBtn = document.querySelector('.category-btn[data-category="all"]');
        if (allBtn) allBtn.classList.add('active');
        renderTools(tools);
        document.body.offsetHeight;
    }, 0);

    // 语言切换功能
    const languageBtns = document.querySelectorAll('.language-btn');
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            if (lang === 'en') {
                // 切换到英文版本
                window.location.href = '../index.html';
            } else if (lang === 'cn') {
                // 移除其他按钮的active状态，添加到当前按钮
                languageBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});