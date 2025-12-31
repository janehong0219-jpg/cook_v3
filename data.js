// data.js - 勛勛上菜 (極簡版資料庫)
const allRecipes = [
    // === 早午餐 Brunch ===
    {
        type: 'brunch',
        tags: ['雞蛋', '起司', '早午餐', '義式'],
        name: '菠菜起司厚烘蛋',
        time: '20 min',
        img: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?w=800',
        ingredients: [{ name: '雞蛋', qty: '4 顆' }, { name: '菠菜', qty: '1 把' }, { name: '起司絲', qty: '50g' }],
        steps: ['菠菜炒軟，倒入蛋液。', '小火慢煎至邊緣凝固。', '撒起司蓋鍋悶熟。'],
        gf: '這看起來很像網美店賣的，但記得用不沾鍋，不然你洗鍋子的時候會哭出來。還有，起司熱量很高，不要因為是早午餐就放縱。'
    },
    {
        type: 'brunch',
        tags: ['雞蛋', '吐司', '早午餐', '美式'],
        name: '黃金法式吐司',
        time: '15 min',
        img: 'https://images.unsplash.com/photo-1484723088339-fe28233e562e?w=800',
        ingredients: [{ name: '厚片吐司', qty: '2 片' }, { name: '雞蛋', qty: '2 顆' }, { name: '牛奶', qty: '50ml' }, { name: '奶油', qty: '1 小塊' }],
        steps: ['蛋液加牛奶打勻。', '吐司浸泡吸飽蛋液。', '奶油熱鍋煎至金黃焦香。'],
        gf: '吸飽蛋液跟牛奶的吐司是很軟嫩啦，但它也吸飽了奶油！這一盤下去，今天的運動量要加倍喔。'
    },

    // === 午茶小點 Teatime ===
    {
        type: 'teatime',
        tags: ['起司', '甜點', '義式'],
        name: '焦香巴斯克乳酪',
        time: '40 min',
        img: 'https://images.unsplash.com/photo-1601409751311-cbecfe223af4?w=800',
        ingredients: [{ name: '奶油乳酪', qty: '250g' }, { name: '雞蛋', qty: '2 顆' }, { name: '鮮奶油', qty: '150g' }, { name: '糖', qty: '60g' }],
        steps: ['材料全混合拌勻。', '過篩倒入模具。', '氣炸200度25分鐘。'],
        gf: '這個熱量我就不說了，滿滿的鮮奶油跟起司。你吃一塊就好，剩下的分給同事，不要一個人偷偷嗑光。'
    },
    {
        type: 'teatime',
        tags: ['香蕉', '甜點', '泰式'],
        name: '泰式香蕉煎餅',
        time: '15 min',
        img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800',
        ingredients: [{ name: '香蕉', qty: '1 根' }, { name: '蛋', qty: '1 顆' }, { name: '煉乳', qty: '適量' }, { name: '春捲皮', qty: '2 張' }],
        steps: ['春捲皮包香蕉蛋液。', '奶油煎酥脆。', '淋上煉乳。'],
        gf: '煉乳！那就是濃縮的糖漿！這道甜點充滿了碳水跟糖，雖然很道地，但為了你的血糖著想，一個月吃一次就好。'
    },

    // === 既有的精選食譜 (加上風格標籤) ===
    {
        type: 'main',
        tags: ['牛肉', '蔥', '台式'],
        name: '蔥爆牛肉',
        time: '15 min',
        img: 'https://images.unsplash.com/photo-1603064755736-2e64032f9573?w=800',
        ingredients: [{ name: '牛肉', qty: '200g' }, { name: '蔥', qty: '5 根' }],
        steps: ['牛肉滑炒備用。', '爆香蔥段。', '混合快炒。'],
        gf: '白飯殺手來了，醬汁太鹹了，記得多喝水排鈉。'
    },
    {
        type: 'side',
        tags: ['雞腿肉', '韓式', '韓式炸雞'],
        name: '韓式洋釀炸雞',
        time: '25 min',
        img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800',
        ingredients: [{ name: '雞腿肉', qty: '300g' }, { name: '韓式辣醬', qty: '2 匙' }],
        steps: ['炸雞裹粉炸酥。', '裹上辣醬汁。'],
        gf: '歐巴～炸雞配啤酒是可以啦，但這個糖分真的爆表。'
    },
    {
        type: 'side',
        tags: ['櫛瓜', '義式'],
        name: '一煎入魂櫛瓜',
        time: '10 min',
        img: 'https://images.unsplash.com/photo-1590408546194-e532b26090c2?w=800',
        ingredients: [{ name: '櫛瓜', qty: '1 條' }, { name: '鹽', qty: '少許' }],
        steps: ['櫛瓜切片。', '乾煎至金黃。'],
        gf: '這道很健康，但如果你是為了配酒才做的，那酒的熱量才是重點。'
    },
    {
        type: 'main',
        tags: ['雞蛋', '番茄', '台式'],
        name: '番茄炒蛋',
        time: '10 min',
        img: 'https://images.unsplash.com/photo-1529940316268-e245e031bcd1?w=800',
        ingredients: [{ name: '番茄', qty: '2 顆' }, { name: '雞蛋', qty: '3 顆' }],
        steps: ['炒蛋盛起。', '炒番茄加水。', '混合拌勻。'],
        gf: '番茄醬裡全是糖！自己煮記得少放點醬。'
    },
    {
        type: 'side',
        tags: ['腐竹', '台式'],
        name: '椒鹽酥炸腐竹',
        time: '10 min',
        img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
        ingredients: [{ name: '腐竹', qty: '1 盒' }, { name: '椒鹽', qty: '適量' }],
        steps: ['腐竹炸酥。', '撒上椒鹽。'],
        gf: '這根本是吸油海綿，吃一口就是喝一口油。'
    }
];