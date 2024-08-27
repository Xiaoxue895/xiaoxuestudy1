document.addEventListener('DOMContentLoaded', () => {
    // 创建并插入你的名字
    const h1 = document.createElement('h1');
    h1.className = 'name';
    h1.textContent = 'Xiaoxue'; // 替换为你的名字
    document.body.appendChild(h1);

    // 创建并插入列表
    const ul = document.createElement('ul');
    ul.className = 'my-details';

    // 列表项内容
    const details = [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4'
    ];

    details.forEach(detail => {
        const li = document.createElement('li');
        li.className = 'detail';
        li.textContent = detail;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);

    // 创建并插入时钟
    const clock = document.createElement('div');
    clock.id = 'clock';
    document.body.appendChild(clock);

    // 更新时钟函数
    function updateClock() {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }

    // 每秒更新时钟
    setInterval(updateClock, 1000);

    // 初始化时钟
    updateClock();
});
