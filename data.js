// data.js - 勛勛上菜 v11.7 (更換番茄炒蛋圖片)
const allRecipes = [
    // --- 🔥 番茄炒蛋 (已更換新圖片) ---
    {
        type: 'main',
        tags: ['雞蛋', '番茄', '台式', '家常熱炒'],
        name: '滑嫩番茄炒蛋',
        time: '10 min',
        // ↓↓↓ 這裡換成了新的圖片連結 ↓↓↓
        img: 'tomato_egg.jpg',
        ingredients: [{ name: '牛番茄', qty: '2 顆' }, { name: '雞蛋', qty: '3 顆' }, { name: '番茄醬', qty: '1 大匙' }],
        steps: ['雞蛋炒半熟盛起。', '番茄炒軟加醬煨煮。', '混合拌勻。'],
        gf: '不要以為番茄炒蛋就很健康，番茄醬裡全是糖！自己煮記得少放點醬。',
        secretMsg: '其實...我知道你工作很忙很累，但還是願意花時間為我們做飯。阿勛，謝謝你的用心，每一道菜都有家的味道，我們都吃得很幸福！❤️',
        showSecret: false
    },

    // --- 🥬 市場食材對應食譜 ---
    {
        type: 'main',
        tags: ['絲瓜', '蛤蜊', '台式', '家常熱炒'],
        name: '鮮甜絲瓜蛤蜊',
        time: '15 min',
        img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800', 
        ingredients: [{ name: '絲瓜', qty: '1 條' }, { name: '蛤蜊', qty: '300g' }, { name: '薑絲', qty: '適量' }],
        steps: ['絲瓜切塊，熱鍋爆香薑絲。', '下絲瓜炒軟，放入蛤蜊。', '加少許水悶煮至蛤蜊全開。'],
        gf: '這道菜根本就是喝湯用的！絲瓜的甜加蛤蜊的鮮，超級清爽。但拜託蛤蜊吐沙吐乾淨，我不想吃到沙子。'
    },
    {
        type: 'side',
        tags: ['空心菜', '大蒜', '台式', '家常熱炒'],
        name: '大火蒜炒空心菜',
        time: '5 min',
        img: 'https://images.unsplash.com/photo-1562967677-77567793d5f5?w=800',
        ingredients: [{ name: '空心菜', qty: '1 把' }, { name: '蒜頭', qty: '5 瓣' }, { name: '辣椒', qty: '1 根' }],
        steps: ['熱油爆香大量的蒜碎與辣椒。', '下空心菜大火快炒。', '鍋邊淋點水，加鹽調味迅速起鍋。'],
        gf: '炒青菜要的就是那個「鍋氣」！火要大、動作要快，不然青菜變黑就不好吃了。多吃點菜，不要整天只吃肉。'
    },
    {
        type: 'main',
        tags: ['五花肉', '蔥', '大蒜', '古早味滷肉', '台式'],
        name: '阿嬤的紅燒五花肉',
        time: '45 min',
        img: 'https://images.unsplash.com/photo-1606728035784-c8a13a426456?w=800',
        ingredients: [{ name: '五花肉', qty: '600g' }, { name: '醬油', qty: '50ml' }, { name: '冰糖', qty: '1 大匙' }, { name: '八角', qty: '2 顆' }],
        steps: ['五花肉煸炒逼油。', '加入冰糖炒出糖色。', '加佐料燉煮 40 分鐘。'],
        gf: '這五花肉滷得亮晶晶的，看起來就很邪惡！雖然很下飯，但那個肥油...我們一人一半，肥的給你，瘦的給我。'
    },
    {
        type: 'main',
        tags: ['排骨', '大蒜', '台式', '港點'],
        name: '蒜香豉汁蒸排骨',
        time: '30 min',
        img: 'https://images.unsplash.com/photo-1542038784424-48dd9548bc62?w=800',
        ingredients: [{ name: '豬小排', qty: '300g' }, { name: '豆豉', qty: '1 匙' }, { name: '太白粉', qty: '1 匙' }],
        steps: ['排骨去血水瀝乾。', '拌入調味料抓醃。', '電鍋蒸熟即可。'],
        gf: '蒸排骨比較健康一點，沒有油煙。記得排骨要洗乾淨，不然會有腥味。這道菜很適合帶便當喔！'
    },
    {
        type: 'main',
        tags: ['虱目魚', '台式', '家常熱炒'],
        name: '乾煎虱目魚肚',
        time: '15 min',
        img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a3a2b7b?w=800',
        ingredients: [{ name: '無刺虱目魚肚', qty: '1 片' }, { name: '椒鹽', qty: '適量' }, { name: '檸檬', qty: '1/4 顆' }],
        steps: ['魚肚擦乾抹鹽。', '乾煎至兩面金黃酥脆。', '擠上檸檬汁。'],
        gf: '虱目魚肚就是要煎到「恰恰」才好吃！中間那塊魚油雖然很香，但熱量也是最高的，稍微瀝一下油再吃啦！'
    },

    // --- 🥪 早午餐與午茶 ---
    {
        type: 'brunch',
        tags: ['雞蛋', '起司', '早午餐', '義式'],
        name: '菠菜起司厚烘蛋',
        time: '20 min',
        img: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?w=800',
        ingredients: [{ name: '雞蛋', qty: '4 顆' }, { name: '菠菜', qty: '1 把' }, { name: '起司絲', qty: '50g' }],
        steps: ['菠菜炒軟，倒入蛋液。', '小火慢煎至邊緣凝固。', '撒起司蓋鍋悶熟。'],
        gf: '這看起來很像網美店賣的，但記得用不沾鍋，不然你洗鍋子的時候會哭出來。'
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

    // --- 🥢 既有經典食譜 ---
    {
        type: 'main',
        tags: ['牛肉', '蔥', '台式', '家常熱炒'],
        name: '蔥爆牛肉',
        time: '15 min',
        img: 'https://images.unsplash.com/photo-1603064755736-2e64032f9573?w=800',
        ingredients: [{ name: '牛肉', qty: '200g' }, { name: '蔥', qty: '5 根' }],
        steps: ['牛肉滑炒備用。', '爆香蔥段。', '混合快炒。'],
        gf: '白飯殺手來了，醬汁太鹹了，記得多喝水排鈉。'
    },
    {
        type: 'side',
        tags: ['雞腿排', '韓式', '韓式炸雞'],
        name: '韓式洋釀炸雞',
        time: '25 min',
        img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800',
        ingredients: [{ name: '雞腿排', qty: '300g' }, { name: '韓式辣醬', qty: '2 匙' }],
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
        type: 'side',
        tags: ['豆皮', '台式', '家常熱炒'],
        name: '椒鹽酥炸豆皮',
        time: '10 min',
        img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
        ingredients: [{ name: '豆皮/腐竹', qty: '1 盒' }, { name: '椒鹽', qty: '適量' }],
        steps: ['豆皮炸酥。', '撒上椒鹽。'],
        gf: '這根本是吸油海綿，吃一口就是喝一口油。'
    }
];
