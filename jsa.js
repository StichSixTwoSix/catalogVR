//Размер картинки 640х360рх
const games = [
  {
    title: "Fist Steps<br>for Quest 2",
    age: "8+",
    image: "fiststeps.jpg",
    description1: "Окунись в мир виртуальной реальности!",
    description2: `Сделайте свои первые шаги в виртуальной реальности и познакомьтесь 
    с контроллерами в этой короткой игре, демонстрирующей возможности Oculus Quest.`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/tLsAnrsXoxA?si=fsQ9dN7rj5y003J8" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Ghostbusters: <br> Rise of the Ghost Lord",
    age: "12+",
    image: "chost.png",
    description1: `КОМУ ОНИ БУДУТ ЗВОНИТЬ? ТЕБЕ!<br>
        Наденьте свою протонную пушку и испытайте острые ощущения и веселье, уничтожая призраков вместе 
        с друзьями в этом приключении, созданном для виртуальной реальности.`,
    description2: `
        ОХОТА НА СЛИМЕРА – УЖЕ СЕЙЧАС!<br>
        Ответьте на зов легендарного охотника за привидениями Рэя Стэнца (озвучен Дэном Эйкройдом) и 
        наденьте летные костюмы настоящих охотников за привидениями, объеденитесь в команду, 
        чтобы выследить Слаймера, прежде чем он сможет принести свой уникальный вид озорства на улицы Сан-Франциско.`,
    media: `<iframe class="game-video" src="https://www.youtube.com/embed/iVWz9vYWfN4?si=PJFjRRaG2FAjwor8" frameborder="0" autoplay; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe>`,
  },
  {
    title: "Beat Saber",
    age: "8+",
    image: "beat.jpg",
    description1: "Доступен мультиплейер.",
    description2: `Игра в виртуальной реальности в которой нужно разрубать летящие кубики саблями под музыку.`,
    media: `<iframe class="game-video" src="https://www.youtube.com/embed/pa4vrynwkwY?si=HpJmZiLvtPW-zsKf" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Fruit Ninja",
    age: "8+",
    image: "fruit2.jpg",
    description1: "Разруби их все, но остерегайся ловушек!",
    description2:
      "Игра в виртуальной реальности в которой нужно разрубать летящие фрукты саблями под музыку.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/PyQFEPbCpWA?si=Rqa9Wb2AHOooIbjz" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Hello Neighbor <br> Search and Rescue",
    age: "12+",
    image: "helloneighbor.jpg",
    description1: "Пришло время узнать, что скрывает ваш жуткий сосед! ",
    description2: `Приготовьтесь встретиться со знаменитым мистером Петерсоном в виртуальной реальности!`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/2vRAOR_iJAI?si=IznuKMYT5Uustw19" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Little Cities",
    age: "8+",
    image: "littlesities.jpg",
    description1: "Построй свой город!",
    description2:
      "Игра, в которой можно построить свой город в виртуальной реальности",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/yKEyZIx7-38?si=_7a7Jk8ZbNNf6yJs" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Blaston",
    age: "8+",
    image: "blaston.jpg",
    description1: `
      Есть ли у вас все необходимое, чтобы стать последним чемпионом в жестокой 
      дуэльной игре в виртуальной реальности от компании «Resolver Games»?`,
    description2: `
    В замедленном пулевом аду Бластона вы постоянно уклоняетесь, пригибаетесь и ныряете, чтобы уклониться от атак вашего противника в этой боевой PvP-игре, которая сочетает в себе мастерство, стратегию и скорость с невероятным арсеналом футуристического высокотехнологичного оружия.
<br>
Обрушьте на своего противника то же самое или даже больше, сохраняя при этом четкое представление о границах вашей гладиаторской турнирной платформы, расположенной всего в двух шагах от вашего противника. Самое главное – никогда не оставайтесь на месте.`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/kGf6nraXLIs?si=viMgIqGAiKCs7iCq" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "First Encounters",
    age: "8+",
    image: "firstencaunter.png",
    description1: "",
    description2: "Исследуй дополненую реальность",
    media: `<img src="./covers/firstencaunter.png" alt="" class="game-image" />`,
  },
  {
    title: "Acron: Attack of the Squirrels",
    age: "8+",
    image: "acron.jpg",
    description1: "",
    description2:
      "Золотые желуди атакованы! Вы и ваши друзья должны защитить их или украсть — в зависимости от того, играете ли вы на гарнитуре VR, чтобы взять на себя роль необычайно защищающего дерева или одной из нескольких хитрых, но вороватых белок на мобильном телефоне — в кроссплатформенном игра для вечеринок «Акрон: Атака белок!» от Resolution Games.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/LP29BxhvHfc?si=OWqN5PcazrcqL16E" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "I Expect You to Die 1",
    age: "16+",
    image: "todie1.jpg",
    description1: "",
    description2:
      "В игре игрок берет на себя роль шпиона в стиле Джеймса Бонда и получает задание проходить уровни.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/uqw7mF80ywk?si=G-anbRTCQ-ePqzOi" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "I Expect You to Die 2",
    age: "16+",
    image: "todie2.jpg",
    description1: "Вторая часть шпионской головомки",
    description2:
      "В игре игрок берет на себя роль шпиона в стиле Джеймса Бонда и получает задание проходить уровни.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/lPRi3ggiP7s?si=k3FyHVHjca08P_Yj" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "I Expect You to Die 3",
    age: "16+",
    image: "todie3.jpg",
    description1: "Третья часть шпионской головоломки",
    description2:
      "В игре игрок берет на себя роль шпиона в стиле Джеймса Бонда и получает задание проходить уровни.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/G-ytteGjbao?si=aMAjI2F9Sub-BEmX" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "All-In-One:<br>Summers Sport VR",
    age: "8+",
    image: "ai1summer.jpg",
    description1: "",
    description2:
      "10 летних видов спорта ждут вас! Отправляйтесь на горячий тропический остров, полный солнца, веселья и незабываемых впечатлений.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/CGcsiA6KBMg?si=lTg8WuJgUA90CLDa" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "All-In-One Sports",
    age: "8+",
    image: "ai1.jpg",
    description1: "",
    description2:
      "Спортивная игра в духе классики с консоли Wii U. Соревнуйтесь со своими друзьями в десяти видах спорта в виртуальной реальности! Устройте целый турнир в различных дисциплинах. Вас ждут: гольф, дартс, бильярд, бадминтон, пинг-понг, бокс, баскетбол, бейсбол, боулинг и даже стрельба из лука! Приятная графика и проработанная физика не дадут вам заскучать ни на минуту",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/Lva5G1a0kB0?si=QBarBJ8JMNRBk6W4" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Ancient Dungeon",
    age: "8+",
    image: "ancient.jpg",
    description1: "",
    description2:
      "это игра в жанре rogue-lite, где подземелья генерируются случайным образом. Раскройте его секреты и бросьте вызов могущественным боссам.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/Tj8g5VdTfqo?si=0epN4M9dtK7Tdnnt" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Angry Birds VR:<br>Isle of Pigs",
    age: "8+",
    image: "angry.jpg",
    description1: `Присоединяйтесь к Рэду, Чаку, Бомбу и Блюзу, чтобы спасти украденные яйца в 
      Angry Birds VR: Isle of Pigs, захватывающем приключенческом VR-приключении, состоящем из более 
      чем 100 веселых уровней от Solution Games!`,
    description2: `
      Исследуйте отдаленный остров, где жадные зеленые свиньи отдыхают, пробейтесь к победе, победив 
      злого доктора Франкенсвайна, и создавайте/открывайте/делитесь бесконечным количеством уровней с 
      помощью онлайн-конструктора уровней.`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/PGgTz4JsiZY?si=iMNxTkBkCNyQA8hK" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Arizona Sunshine Quest",
    age: "16+",
    image: "arizona.jpg",
    description1: "",
    description2: "Игра на выживание в зомбиаппокалипсисе",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/dnS0ZQ4lJss?si=54mn4C9CUhejlPoQ" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "BAM",
    age: "8+",
    image: "bam.webp",
    description1: "",
    description2: `BAM — это динамичная многопользовательская боевая игра в жанре MR. Разместите свою настольную арену там, где вам удобно, масштабируйте ее, вращайте и управляйте своим персонажем, чтобы победить онлайн или локально с помощью пространственных привязок. BAM — это мгновенное развлечение в MR для всех возрастов и всех типов игроков, использующее инновационное кукольное управление и механику «точка-действие».`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/6XomRtk7zLo?si=swi23vU2n3Hrj-_M" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Barbaria",
    age: "8+",
    image: "barbaria.jpg",
    description1: "",
    description2:
      "Barbaria — это смесь VR-боев и строительства. Нападайте на других игроков, стройте оборону и экипируйте свою команду, соревнуясь за звание сильнейшего в Барбарии!",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/MHnjJ9Lk024?si=FedPzIt3_Ic5hA4c" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "COMPOUND",
    age: "8+",
    image: "compound.jpg",
    description1: "",
    description2:
      "COMPOUND — это рандомизированный шутер в жанре rogue-lite со свободным перемещением для ветеранов виртуальной реальности. Пригибайтесь и уклоняйтесь от вражеского огня в жестком ретро-шутере от первого лица с множеством вариантов передвижения.",
    media: `<img src="./covers/compound.jpg" alt="" class="game-image" />`,
  },
  {
    title: "Carly and the Reaperman",
    age: "8+",
    image: "carly.webp",
    description1: "",
    description2:
      "Присоединяйтесь к приключениям Карли и Жнеца в Подземном мире! Преодолевайте опасности и головоломки чтобы проложить путь через забавные и сложные препятствия - играйте в одиночку или с другом!",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/7K_fpK8ZeAE?si=g7VsMdOu9BrM4IKN" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Coaster Mania",
    age: "8+",
    image: "coastermania.jpg",
    description1: `CoasterMania — это игра о американских горках смешанной реальности, основанная на физике, в которой вы создадите аттракцион своей жизни! Используйте причудливые приспособления и элементы, чтобы летать по небу, а затем испытайте свое творение, запрыгнув на переднее сиденье.
`,
    description2: `
      РЕЖИМ ПЕСОЧНИЦЫ: постройте американские горки своей мечты без каких-либо правил, кроме правил физики. Когда закончите, поделитесь своими горками или испытайте инженерные чудеса других. Создавайте свои собственные аттракционы и загружайте их в Интернет.
      <br> РЕЖИМ ГОЛОВОЛОМКИ: используйте физику, чтобы заставить горку пролететь сквозь огненные кольца! Испытайте себя, разгадав коллекцию головоломок, подходящих под размер вашей комнаты.`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/LQArzaeAdag?si=SV3Yg2jiAApJcls5" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Cooking Simulator VR",
    age: "8+",
    image: "cooking.jpg",
    description1: "",
    description2:
      "Станьте лучшим шеф-поваром в VR! Возьмите под свой контроль отполированную и реалистичную кухню, оснащенную всевозможной посудой и подставками.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/bD3nzYTdH9k?si=hCVnUeAl5S9qyG7r" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Cubism",
    age: "8+",
    image: "cubizm.jpg",
    description1: "",
    description2:
      "Испытайте свой разум в кубизме, обманчиво простой игре-головоломке, в которой вам предстоит собирать все более сложные фигуры из разноцветных блоков",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/D8ufYPkKK6E?si=ExktD_fuzJoESrlH" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Deisim",
    age: "8+",
    image: "deisim.jpg",
    description1: "",
    description2:
      "Почувствуйте себя всемогущим богом. Создайте свой собственный мир и проведите человечество от каменного века до современной эпохи и далее.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/U4o8F2aIA5E?si=px9P_RmxkfJJjcT3" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Drop Dead: The Cabin",
    age: "8+",
    image: "dropdead.jpg",
    description1: "Принимайте вызов отнюдь не легкой реальности зомби. ",
    description2:
      "Собирайте запасы, вооружайтесь и отражайте атаки волн бессмертных, вырвавшихся из лабораторного эксперимента. Зарабатывайте опыт, улучшая своего персонажа и вооружение, что сделает вас мощнее и приблизит к завоеванию победы.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/cmrd5FyTmAs?si=O0MdvUA8KslayBld" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Eye of the Temple",
    age: "8+",
    image: "eyetemple.jpg",
    description1: "",
    description2:
      "В игре Eye of the Temple вы исследуете огромный и опасный храм в виртуальной реальности, передвигаясь по нему на своих собственных ногах. Удерживайте равновесие, шагая по движущимся блокам, избегая ловушек и решая головоломки с помощью факела и кнута.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/9PgcDOaTAFI?si=_OiLV-Eyk4uptOEH" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "GORN",
    age: "18+",
    image: "gorn.jpg",
    description1: "",
    description2:
      "GORN — это невероятно жестокий VR-симулятор гладиатора, созданный Free Lives, разработчиками Broforce и Genital Jousting.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/WmV0XAx0sE8?si=EO9AxSUEwpIamoVe" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Gadgeteer",
    age: "8+",
    image: "gadgeteer.jpg",
    description1: "",
    description2:
      "Gadgeteer — это VR-головоломка, работающая по законам физики. Здесь вы можете построить машины цепной реакции и решать увлекательные и затейливые головоломки.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/c3LJWGcCqD4?si=bo43hLrz0YYq-8dW" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Ghost Giant",
    age: "8+",
    image: "GhostGiant.webp",
    description1: "",
    description2:
      "В Ghost Giant игрок управляет великаном-призраком. Он должен сопровождать котёнка по имени Льюис, менять ландшафт, переставляя крупные предметы и решая головоломки. Игрок может исследовать мир Санкуры и взаимодействовать с различными неигровыми персонажами, живущими в городе. Игровые участки представлены в виде диорам. Только Льюис может видеть гиганта. Игрок наблюдает за развитием истории с позиции стороннего наблюдателя, а именно наблюдая за поведением и разговорами котёнка",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/nWsDpz4-Sd0?si=a0ROeW-OJWgM7y3B" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Gravity Lab",
    age: "8+",
    image: "gravitylab.jpg",
    description1: "",
    description2:
      "Создайте свою невероятную машину с помощью устройств для гравитационной гибки от Gravity Lab! Наш новый лунный испытательный центр приглашает вас опробовать наши стандартизированные сценарии испытаний, теперь предназначенные для людей.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/FzwsX-DUqpw?si=OHsulIN8YwtO7qF4" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Hand Physics Lab",
    age: "8+",
    image: "handlab.webp",
    description1:
      "Откройте для себя уникальную вселенную лаборатории физики рук, где вам нужно будет выполнять разнообразные задания и головоломки, используя только свои руки!",
    description2: `Вам предстоит пройти через 80 различных головоломок и насладиться множеством игровых площадок, где вы сможете свободно творить, строить и играть! Здесь вас ждут увлекательные задания, такие как раскрашивание яиц пальцами, строительство башен из кубиков, использование магнитов и телекинеза, поглаживание виртуальной кошки и многое другое!`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/w-w7omxJuOk?si=JIdurWrBHglHcKyA" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Interkosmos 2000",
    age: "8+",
    image: "interkosmos.jpg",
    description1: "",
    description2:
      "Отправляйтесь в космос. Спасите будущее. Постарайтесь не умереть. Добро пожаловать в мир Интеркосмоса, где вас ждут еще более дикие, странные и чудесные",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/yrzOK-88Jcs?si=G0sMFjdWp7l-lg9P" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Kartoffl",
    age: "8+",
    image: "kartoffl.jpeg",
    description1: "",
    description2:
      "Проведите группу очаровательных козявок через серию сложных и разнообразных уровней в этом милом приключении, в которое можно играть сидя, стоя или в полной виртуальной реальности.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/QwkgzY9gxnw?si=jDJEQMygWmo7WQQ1" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "LEGO Cities",
    age: "8+",
    image: ".jpg",
    description1: "",
    description2: "",
    media: `
    <iframe class="game-video" src="" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Lucky`s Tale",
    age: "8+",
    image: "luckystale.jpg",
    description1: "",
    description2:
      "Счастливчик Свифтейл — отважный лис, который пытается спасти своего лучшего друга Пигги от чудовищного Глорпа с щупальцами. Вместе вы будете бегать, прыгать и карабкаться по яркому, красочному миру, полному очаровательных персонажей, битв с боссами, сотен секретов, которые нужно открыть, и захватывающего 3D-платформера.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/yNsS9aTA8SE?si=2t5mkwvsSiS9XRFY" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Moss",
    age: "8+",
    image: "moss.jpg",
    description1: "",
    description2:
      "Moss — динамичное приключение с элементами головоломки для одного игрока — новая игра от Polyarc, созданная специально для VR. Она сочетает классические элементы прекрасной игры — интересных персонажей, захватывающую боевую систему, исследование мира — с новыми возможностями виртуальной реальности.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/hrjly2M7KbA?si=ZQXdh-ju4Z6PowLt" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Never Down Demo <br> Only Up",
    age: "8+",
    image: "onlyup.jpg",
    description1: "",
    description2:
      "В этой захватывающей игре вам предстоит карабкаться вверх, прыгая и отталкиваясь от пола. Вам нужно быть быстрым и ловким, чтобы добраться до вершины. Игра предлагает множество уровней.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/RXxW7rIizEs?si=pe2ogVeMUPGK_kiE" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Pictol Whip",
    age: "12+",
    image: "pistolwimp.jpg",
    description1: "",
    description2:
      "Печально известная стрелок вновь появляется, чтобы бродить по Дикому Западу в поисках своей пропавшей сестры, раскрывая глубокий заговор на пороге промышленной революции. Пришло время надеть свою лучшую ковбойскую шляпу и отправиться с оружием в руках на дикий Запад, где поезда выходят из-под контроля, технологии Tesla гудят на каждом шагу, а взрывы динамита танцуют по небу.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/rLGn2mnhkvo?si=_hh-7pGGSbq1-jLj" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Please Dont Touch Anything",
    age: "8+",
    image: "PleaseDontTouchAnything.jpg",
    description1: "",
    description2:
      "Please, Don't Touch Anything  — это криптографическая игра-загадка про перерывы на уборную, отвёртки, и ядерные взрывы.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/w-rt3sWs7FY?si=Zpjb6s4hE10AhWB4" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Please Dont Touch Anything<br>House Broken",
    age: "8+",
    image: "PleaseDontTouchAnything2.jpg",
    description1: "",
    description2:
      "Please, Don't Touch Anything  — это совершенно новая умопомрачительная эволюция популярной серии головоломок. Выпустите хаос в свой дом!",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/7jgqbp1NNIg?si=SsuJaoqyM6XDQ5MG" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Power Wash Simulator VR",
    age: "8+",
    image: "powerwash.jpg",
    description1: "",
    description2:
      "В PowerWash Adventure вы можете проводить уборку в самых разных сценариях, например, в садах, гаражах, парках, школах и т. д. Смывайте всю грязь и мусор, чтобы вернуть их в исходное состояние. Используйте заработанные золотые монеты для покупки и улучшения различных типов и функций водяных пистолетов высокого давления, чтобы сделать ваш водяной пистолет более мощным и гибким, а также наслаждаться острыми ощущениями от промывки и чувством выполненного долга.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/_eu5HLdouYU?si=u-DD4ZlbvzfIpjUw" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Ragnarock",
    age: "8+",
    image: "ragnarock.jpg",
    description1: "Пора начинать вечеринку? ",
    description2:
      "Ragnarock — это однопользовательская или многопользовательская ритм-игра с погружением в ПК и Виртуальная реальность, где ты играешь в роли капитана корабля викингов. Твоя цель — выиграть гонку. Разбивай появляющиеся руны своими двумя молотами под эпическую музыку в духе викингов. Попадая точно по рунам, ты соберешь комбо, зарядишь энергией свои молоты и сможешь активировать ускорение! Рискнешь обойти всех и вписать свое имя в таблицу лидеров?",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/sWmSI-oeRao?si=CZ6EWA8uwpVwWnnQ" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Resist",
    age: "12+",
    image: "resist.jpg",
    description1: "",
    description2:
      "Антиутопическое будущее. Авторитарный режим. История насилия, интриг и надежды. Качайтесь с высоких небоскребов и сражайтесь со смертоносными врагами, сражаясь за освобождение своего города от зла, которое его поглощает. Подчинитесь ли вы силам угнетения? Или у вас хватит сил сопротивляться?",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/zcDf5HroaEI?si=MbmLn08f0TwXE4kn" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Richie's Plank Experience",
    age: "8+",
    image: "richie.jpg",
    description1: "",
    description2:
      "Это не игра. Richie’s Plank Experience — это психологический опыт, на который ваши посетители и гости будут реагировать восторгом, страхом или смехом. Для ветерана виртуальной реальности еще больше удовольствия становится наблюдение за реакцией других.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/4M92kfnpg-k?si=LUhQIUswBN-CfhpB" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Surgineer",
    age: "8+",
    image: "surgineer.jpg",
    description1: "",
    description2:
      "Добро пожаловать в самый нереалистичный симулятор хирургии, где каждый может мгновенно стать ужасным врачом. Вы будете решать веселые хирургические процедуры, начиная от сердечно-легочной реанимации и заканчивая трансплантацией мозга или даже удалением яйцеклеток инопланетян у бедного пациента с помощью роботизированной руки! Surgineer сочетает в себе веселые и сложные процедуры. Вы весело проведете время, разрезая ноги, удаляя инородные тела и пересаживая органы или конечности, но никогда не забывайте, что цель — сохранить жизнь вашему пациенту!",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/g4ya3MHqLnM?si=zI1rbCMYzBdHaRnB" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Synth rider",
    age: "8+",
    image: "SynthRiders.webp",
    description1:
      "Позвольте музыке двигать вами, пока вы ловите ноты, катаетесь по рельсам и уклоняетесь от препятствий в уникальном сочетании фристайла и фитнес-тренировок, которое позволит вам сжигать калории и в то же время получать массу удовольствия.",
    description2: `Официальная поддержка CUSTOM SONGS — создавайте свои собственные карты битов с помощью бесплатного редактора уже сегодня!
      <br>СЖИГАЙТЕ КАЛОРИИ , используя уникальное сочетание фристайла и фитнеса!`,
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/jirqqoL2JrU?si=QE49Ik-f71WTx_cy" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Tea For God",
    age: "8+",
    image: "tea.jpg",
    description1: "",
    description2:
      "Бог-Император находится в месте за гранью нашего мира. Исследуйте огромный комплекс, одновременно сражаясь с полчищами роботов. При этом вы продолжаете ходить по своей комнате, что выводит погружение на новый уровень.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/BrGFbidkliQ?si=dXT0q9ND_TJlWwGb" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Townscaper",
    age: "8+",
    image: "townscaper.jpg",
    description1: "",
    description2:
      "Стройте причудливые островные города с извилистыми улочками, небольшими деревушками, высокими соборами, сетью каналов или небесными городами на сваях.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/hqq25n6cQqo?si=fMFyjCe6Uk-Gckqm" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "UNBINARY",
    age: "8+",
    image: "Unbinary.webp",
    description1: "",
    description2:
      "UNBINARY — это приключенческая игра-головоломка в виртуальной реальности, полностью нарисованная вручную. Познакомьтесь с Уэбби, искусственным интеллектом, созданным на основе данных, собранных на основе поведения человека, и кандидатом на управление планетой Земля.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/Ull3HTPu2PA?si=ppqwO9GtzUrvcy41" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Ultrawings 2",
    age: "8+",
    image: "ultrawings.jpg",
    description1: "",
    description2:
      "Ultrawings 2 — это приключенческая игра с открытым миром, созданная для виртуальной реальности, в которой вы зарабатываете внутриигровые деньги, выполняя различные миссии по покупке новых самолетов и островов в обширном мире.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/dNEIdHa9NDc?si=hHR9dc4kwLtqI2SE" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Vacation Simulator",
    age: "8+",
    image: "vacation.jpg",
    description1: "",
    description2:
      "Мы привестствуем тебя, Биоорганическое Существо, в Vacation Simulator, грубой имитации ОТПУСКА, навеянной настоящей человеческой жизнью БЕЗ ВЫПОЛНЕНИЯ ЗАПЛАНИРОВАННЫХ ЗАДАЧ! Наш симулятор составлен идентичными роботами, что скомпоновали имитатор человеческой работы в Job Simulator. Твой алгоритм: перевести свою пропускную способность в отпускной режим; приготовиться плескаться, поглощать сладости, играть в снежки и максимизировать наслаждение посредством многочисленных селфи!",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/vn-q463SWf0?si=WAKkg7z7WZxkMfjV" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Vader Immortal<br>Episode I",
    age: "8+",
    image: "VaderImmortal.webp",
    description1: "",
    description2:
      "Шагните в далекую-далекую галактику вместе с Vader Immortal: Episode I. Вы контрабандист, действующий недалеко от Мустафара, огненного мира, который Дарт Вейдер называет своим домом.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/rWfcMwMzfag?si=y4ycDMdgh82USkL3" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Warplanes:<br>Battles over Pacific",
    age: "8+",
    image: "warplanesPacific.jpg",
    description1:
      "Warplanes: Battles over Pacific открывает следующую главу в истории авиации. Станьте пилотом времен Второй мировой войны и примите участие в кампании против Японской империи.",
    description2:
      "Fighters выводит воздушные бои на новый уровень. Реалистичная графика и интуитивно понятное управление улучшают игровой процесс. Новая летная модель позволит вам ощутить мощь, скорость и управляемость самых популярных американских и японских самолетов. Технологический скачок между Первой и Второй мировыми войнами сделал авиацию ведущей отраслью вооруженных сил и навсегда изменил войну…",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/vJMTmxmTI3g?si=HUQhxq99aRyv5LBv" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Warplanes:<br>WW1 Fighters",
    age: "8+",
    image: "warplanesWW1.jpg",
    description1: "",
    description2:
      "Погрузитесь в незабываемые воздушные бои Warplanes: WW1 Fighters времён Первой мировой в VR! С гибкой системой параметров каждый сможет настроить реализм игры под себя.",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/vHDKB86NW2A?si=I5GFxlss6xnFj0hM" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Windlands 2",
    age: "8+",
    image: "windlands.jpg",
    description1: "",
    description2:
      "Играйте от первого лица и используйте крюк-кошку: вернитесь в мир Windlands в одиночестве или с друзьями! Вооружитесь хватательными крюками и луком, чтобы исследовать руины разрушенного мира. Победите огромных колоссов и спасите мир от древнего зла!",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/DXDk5rWi21s?si=tfhri1ukw7q_NWWU" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
  {
    title: "Yupiterglad ",
    age: "8+",
    image: "yupitergrad.jpg",
    description1:
      "В Yupitergrad вы играете за космонавта, бороздящего просторы сел-шейдинговой космической станции с помощью присосок. Кто бы мог подумать, что крюки-кошки — это лучшее средство перемещения в таком месте? ",
    description2:
      "Это уникальное сочетание VR-платформера и головоломки с одиночной кампанией и режимом на время для любителей острых ощущений. Все это приправлено вкуснейшим дизельпанковым соусом. Долгожданный динамичный VR-платформер, от которого не кружится голова. Система перемещения прямиком из Индианы Джонса. Крюки и ускорители — это идеальная пара. Кампания с более чем 50 уровнями, безумный сюжет, доза славянского юмора и батиных шуток. Все любят пространственные головоломки — и у нас их навалом! Режим на время с 20 аркадными уровнями и таблицей лидеров. Энергичный и атмосферный саундтрек. Уникальный стиль дизельпанк в космосе. Крюки-кошки легки в освоении — хватит и двух минут!",
    media: `
    <iframe class="game-video" src="https://www.youtube.com/embed/_gNpNlT2zA4?si=djdnFRf9DyGDTLiR" frameborder="0" autoplay; encrypted-media; allowfullscreen></iframe>`,
  },
];

const demo = document.querySelector(".demo");
const video = document.getElementById("video");
const playVideo = document.querySelector(".play-video");
const gList = document.querySelector(".game-list");
const cross = document.querySelector(".cross");
const curAge = document.querySelector(".game-age");
const curImage = document.querySelector(".curent-image");
const curTitle = document.querySelector(".curent-title");
const curDesc1 = document.querySelector(".curent-description1");
const curDesc2 = document.querySelector(".curent-description2");

const modal = document.querySelector(".modal");
let curGame = 0;

demo.addEventListener("click", function () {
  demo.classList.add("modal");
  document.body.classList.remove("_lock");
});
playVideo.addEventListener("click", function () {
  demo.classList.remove("modal");
  document.body.classList.add("_lock");
});

function init() {
  updateGameList(games);
}

init();

function updateGameList(games) {
  gList.innerHTML = "";

  games.forEach((game, index) => {
    const { title, age, image } = game;
    const item = document.createElement("div");
    item.classList.add("game-item");
    item.innerHTML = `
            <div class="game-age"><span>${age}</span></div>
            <img src="./covers/${image}" alt="" class="game-image" />
            <h2 class="game-title">     ${title}</h2>
            `;
    gList.appendChild(item);

    item.addEventListener("click", (e) => {
      curGame = index;
      console.log(curGame);
      gameInfo(curGame);
    });
  });
}

function gameInfo(num) {
  modal.classList.add("active");
  document.body.classList.add("_lock");
  curImage.innerHTML = `
  <div class="game-age">${games[num].age}</div>
  ${games[num].media}
   `;
  curTitle.innerHTML = games[num].title;
  curDesc1.innerHTML = games[num].description1;
  curDesc2.innerHTML = games[num].description2;
}

cross.addEventListener("click", function () {
  modal.classList.remove("active");
  document.body.classList.remove("_lock");
  curImage.innerHTML = "";
  curTitle.innerHTML = "";
  curDesc1.innerHTML = "";
  curDesc2.innerHTML = "";
});

//<img src="./covers/${games[num].image}" alt="" class="game-image" />
