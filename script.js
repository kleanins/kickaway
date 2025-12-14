document.addEventListener('DOMContentLoaded', () => {
    
    const translations = {
        'tr': {
            metaTitle: 'Kickaway - Kick Çekiliş Aracı',
            metaDescription: 'Kick.com için açık kaynaklı, istemci taraflı bir çekiliş aracı',
            loginTitle: 'kickaway.co',
            loginPrompt: 'Çekiliş yapmak istediğin Kick kanalını giriniz',
            loginPlaceholder: 'Örn: xqc',
            connectButton: 'Bağlan',
            connecting: 'Bağlanılıyor…',
            connectedTo: 'Bağlı Kanal:',
            settingsMenuAria: 'Ayarlar Menüsü',
            changeChannel: 'Kanal Değiştir',
            clearAllData: 'Tüm Veriyi Sil',
            settingsTitle: 'Ayarlar',
            keywordLabel: 'Anahtar Kelime (opsiyonel):',
            winnerCountLabel: 'Kazanan Sayısı:',
            subOnlyLabel: 'Sadece aboneler katılsın',
            subMultiplierLabel: 'Abone Çarpanı:',
            
            followLengthLabel: 'Takip Süresi:',
            subLengthLabel: 'Abonelik Süresi:',
            daysLabel: 'Gün',
            monthsLabel: 'Ay',
            followTooltip: 'Deneysel Özellik: Çekilişin çekilmesi sırasında kazananın takip süresi kontrol edilir. Bu yüzden Katılımcılar listesinde çekilişi takip süresi sebebiyle teknik olarak kazanamayacak kullanıcıların görünmesi normaldir.',
            
            winnerClaimLabel: 'Kazanan onayı (tekli kazananda)',
            claimDurationLabel: 'Onay Süresi (sn):',
            animationLabel: 'Animasyon:',
            animationWheel: 'Çark',
            animationClassic: 'Klasik',
            animationScramble: 'Karışık Harfler',
            startGiveawayButton: 'Çekilişi Başlat',
            statusWaiting: 'Sohbete bağlanmak için "Başlat" butonuna bas.',
            statusConnected: (keyword) => keyword === '' ? 'Sohbete bağlanıldı! Katılımlar başladı!' : `Sohbete bağlanıldı! "${keyword}" bekleniyor.`,
            statusConnectionLost: 'Bağlantı koptu!',
            participantsTitle: 'Katılımcılar',
            drawButton: 'Çekilişi Çek',
            resetButton: 'Sıfırla',
            winnersTitle: 'Kazananlar',
            claimTitle: 'Onay Bekleniyor:',
            claimCountdownText: (name, time) => `${name}, onayın için ${time} saniyen var...`,
            claimConfirmed: 'Onaylandı!',
            claimFailed: 'Süre Doldu!',
            okButton: 'Tamam',
            modalDrawing: 'Çekiliyor...',
            modalChecking: 'Adaylar Kontrol Ediliyor:',
            modalWinnerTitle: 'Kazanan:',
            alertEnterChannel: 'Lütfen bir kanal adı girin.',
            alertLoginError: (msg) => `Giriş hatası: ${msg}`,
            alertChannelNotFound: 'Kanal bulunamadı veya API hatası.',
            alertChatroomIDError: 'Chatroom ID alınamadı.',
            alertNoParticipants: 'Çekilişe katılan kimse yok!',
            alertApi: 'Takip süresi kontrol edilirken hata!',
            confirmChangeChannel: 'Kanal seçim ekranına dönülecektir. Emin misiniz?',
            confirmClearAllData: 'DİKKAT! Tüm kanallara ait ayarlar ve kazanan listeleri kalıcı olarak silinecektir. Emin misiniz?',
            footerDisclaimer1: "Bu araç bağımsız bir geliştirici tarafından oluşturulmuştur ve Kick.com ile herhangi bir resmi ilişkisi yoktur.",
            footerDisclaimer2: "Kullanımından doğabilecek herhangi bir sonuç tamamen kullanıcının sorumluluğundadır.",
            footerDisclaimer3: "Kickaway tamamen istemci taraflı çalışır; çekiliş verileri yalnızca tarayıcınızın yerel depolama alanında tutulur.",
            footerDisclaimer4: "Bu site anonim istatistikler toplar.",
            subscriberTitle: (count) => `Abone (${count} Hak)`,
        },
        'en': {
            metaTitle: 'Kickaway - Kick Giveaway Tool',
            metaDescription: 'An open-source, client-side giveaway tool for Kick.com',
            loginTitle: 'kickaway.co',
            loginPrompt: 'Enter the Kick channel for the giveaway',
            loginPlaceholder: 'E.g., xqc',
            connectButton: 'Connect',
            connecting: 'Connecting…',
            connectedTo: 'Connected to:',
            settingsMenuAria: 'Settings Menu',
            changeChannel: 'Change Channel',
            clearAllData: 'Clear All Data',
            settingsTitle: 'Settings',
            keywordLabel: 'Keyword (optional):',
            winnerCountLabel: 'Number of Winners:',
            subOnlyLabel: 'Subscribers only',
            subMultiplierLabel: 'Subscriber Multiplier:',
            
            followLengthLabel: 'Follow Length:',
            subLengthLabel: 'Subscriber Length:',
            daysLabel: 'Days',
            monthsLabel: 'Months',
            followTooltip: 'Experimental feature, during the draw the winner\'s follow duration is checked. Because of this, it is normal for users who technically cannot win due to follow duration to appear in the participants list.',
            
            winnerClaimLabel: 'Winner confirmation (for single winner)',
            claimDurationLabel: 'Confirm Time (s):',
            animationLabel: 'Animation:',
            animationWheel: 'Wheel',
            animationClassic: 'Classic',
            animationScramble: 'Character Scramble',
            startGiveawayButton: 'Start Giveaway',
            statusWaiting: 'Press "Start" to connect to the chat.',
            statusConnected: (keyword) => keyword === '' ? 'Connected to chat! Entries are open!' : `Connected to chat! Waiting for "${keyword}".`,
            statusConnectionLost: 'Connection lost!',
            participantsTitle: 'Participants',
            drawButton: 'Draw Winner',
            resetButton: 'Reset',
            winnersTitle: 'Winners',
            claimTitle: 'Awaiting Confirmation:',
            claimCountdownText: (name, time) => `${name}, you have ${time} seconds to confirm...`,
            claimConfirmed: 'Confirmed!',
            claimFailed: 'Time is up!',
            okButton: 'OK',
            modalDrawing: 'Drawing...',
            modalChecking: 'Checking Candidates:',
            modalWinnerTitle: 'Winner:',
            alertEnterChannel: 'Please enter a channel name.',
            alertLoginError: (msg) => `Login error: ${msg}`,
            alertChannelNotFound: 'Channel not found or API error.',
            alertChatroomIDError: 'Could not get Chatroom ID.',
            alertNoParticipants: 'There are no participants in the giveaway!',
            alertApi: 'Error while checking Follow Length!',
            confirmChangeChannel: 'You will be returned to the channel selection screen. Are you sure?',
            confirmClearAllData: 'WARNING! All settings and winner lists for all channels will be permanently deleted. Are you sure?',
            footerDisclaimer1: "This tool was created by an independent developer and has no official affiliation with Kick.com",
            footerDisclaimer2: "Any consequences arising from its use are the sole responsibility of the user.",
            footerDisclaimer3: "Kickaway works entirely client-side; giveaway data lives only in your browser’s local storage.",
            footerDisclaimer4: "This site collects anonymous statistics.",
            subscriberTitle: (count) => `Subscriber (${count}x Entries)`,
        }
    };

    let currentLang; 
    const languageSwitcher = document.getElementById('language-switcher');

    function setLanguage(lang) {
        if (!translations[lang]) lang = 'en';
        currentLang = lang;
        localStorage.setItem('kickawayLang', lang);

        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-key-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-lang-key-aria-label]').forEach(el => {
            const key = el.getAttribute('data-lang-key-aria-label');
            if (translations[lang][key]) {
                el.setAttribute('aria-label', translations[lang][key]);
            }
        });

        document.querySelectorAll('[data-lang-key-title]').forEach(el => {
            const key = el.getAttribute('data-lang-key-title');
            if (translations[lang][key]) {

                el.setAttribute('data-title', translations[lang][key]); 
                el.removeAttribute('title'); 
            }
        });

        document.title = translations[lang].metaTitle;
        document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].metaDescription);
        document.querySelector('meta[property="og:title"]').setAttribute('content', translations[lang].metaTitle);
        document.querySelector('meta[property="og:description"]').setAttribute('content', translations[lang].metaDescription);
        
        if(languageSwitcher.querySelector('#lang-tr-button')) {
            languageSwitcher.querySelector('#lang-tr-button').classList.toggle('active-lang', lang === 'tr');
            languageSwitcher.querySelector('#lang-en-button').classList.toggle('active-lang', lang === 'en');
        }
        
        if (isGiveawayRunning) {
             const modeText = translations[currentLang].statusConnected(giveawayKeyword);
             statusMessage.textContent = modeText;
        } else {
             statusMessage.textContent = translations[currentLang]?.statusWaiting || translations['en'].statusWaiting;
        }
        updateWinnersListUI();
    }
    
    const loginScreen = document.getElementById('login-screen'),
          mainScreen  = document.getElementById('main-screen'),
          channelInput = document.getElementById('channel-input'),
          connectButton = document.getElementById('connect-button'),
          connectedChannelName = document.getElementById('connected-channel-name');

    const headerMenuContainer = document.getElementById('header-menu-container'),
          headerMenuToggle    = document.getElementById('header-menu-toggle'),
          headerMenuDropdown  = document.getElementById('header-menu-dropdown'),
          changeChannelButton = document.getElementById('change-channel-button'),
          clearAllDataButton  = document.getElementById('clear-all-data-button');

    const settingsPanel        = document.querySelector('.settings-panel'),
          keywordInput         = document.getElementById('keyword-input'),
          winnerCountInput     = document.getElementById('winner-count-input'),
          subOnlyCheckbox      = document.getElementById('sub-only-checkbox'),
          subMultiplierSlider  = document.getElementById('sub-multiplier-slider'),
          subMultiplierValue   = document.getElementById('sub-multiplier-value'),
          winnerClaimCheckbox  = document.getElementById('winner-claim-checkbox'),
          claimDurationInput   = document.getElementById('claim-duration-input'),
          animationSelect      = document.getElementById('animation-select'),
          startGiveawayButton  = document.getElementById('start-giveaway-button'),
          statusMessage        = document.getElementById('status-message');

    
    const followLengthSlider = document.getElementById('follow-length-slider'),
          followLengthValue  = document.getElementById('follow-length-value'),
          subLengthSlider    = document.getElementById('sub-length-slider'),
          subLengthValue     = document.getElementById('sub-length-value');

    const participantCount     = document.getElementById('participant-count'),
          participantList      = document.getElementById('participant-list'),
          drawButton           = document.getElementById('draw-button'),
          resetButton          = document.getElementById('reset-button');
    
    const winnersCount         = document.getElementById('winners-count'),
          winnersList          = document.getElementById('winners-list');

    const claimSection         = document.getElementById('claim-section'),
          claimWinnerName      = document.getElementById('claim-winner-name'),
          claimCountdown       = document.getElementById('claim-countdown'),
          claimChatLog         = document.getElementById('claim-chat-log'),
          claimConfirmButton   = document.getElementById('claim-confirm-button');
    
    const modalTemplate = document.getElementById('modal-template');
    const multiWinnerModalContainer = document.getElementById('multi-winner-modal-container');

    let kickChannelName = '', kickChannelSlug = '', kickChatroomId  = null, channelCreationDate = null, ws = null;
    let giveawayKeyword = '', isGiveawayRunning = false, isDrawInProgress = false;
    let participants   = new Set(), allEntries = [], winners = [];
    let modalChatWinners = [], claimInterval = null, lastClaimWinner = null;
    let pendingAnimationInterval = null; 

    function showScreen(scr) {
        loginScreen.style.display = 'none';
        mainScreen.style.display = 'none';
        if (scr === 'login') loginScreen.style.display = 'flex';
        if (scr === 'main') mainScreen.style.display = 'block';
    }

    function setSettingsState(disabled) {
        settingsPanel.querySelectorAll('input:not([type="checkbox"]), select, button#start-giveaway-button').forEach(el => el.disabled = disabled);
        subOnlyCheckbox.disabled = disabled;
        
        const rangeInputs = settingsPanel.querySelectorAll('input[type="range"]');
        rangeInputs.forEach(input => input.disabled = disabled);

        if (disabled) {
            winnerClaimCheckbox.disabled = true;
            claimDurationInput.disabled = true;
        } else {
            updateClaimSettingsState();
        }
    }
    
    function updateDrawButtonState() {
        if (isDrawInProgress) {
            drawButton.disabled = true;
            return;
        }
        const potentialWinnersLeft = [...new Set(allEntries)].length;
        drawButton.disabled = potentialWinnersLeft === 0;
    }

    function getStoredData() { return JSON.parse(localStorage.getItem('kickGiveawayDB') || '{}'); }

    function saveState() {
        if (!kickChannelName) return;
        const allData = getStoredData();
        allData[kickChannelName] = {
            settings: {
                keyword: keywordInput.value,
                winnerCount: winnerCountInput.value,
                subOnly: subOnlyCheckbox.checked,
                subMultiplier: subMultiplierSlider.value,
                followLength: followLengthSlider.value, 
                subLength: subLengthSlider.value,       
                winnerClaim: winnerClaimCheckbox.checked,
                claimDuration: claimDurationInput.value,
                animation: animationSelect.value,
            },
            winners: winners,
        };
        localStorage.setItem('kickGiveawayDB', JSON.stringify(allData));
    }

    function loadStateForChannel(channelName) {
        resetSession();
        const allData = getStoredData();
        const channelData = allData[channelName];

        if (channelData) {
            const { settings, winners: storedWinners } = channelData;
            keywordInput.value = settings.keyword || '';
            winnerCountInput.value = settings.winnerCount || '1';
            subOnlyCheckbox.checked = settings.subOnly || false;
            subMultiplierSlider.value = settings.subMultiplier || '1';
            subMultiplierValue.textContent = settings.subMultiplier || '1';
            
            followLengthSlider.value = settings.followLength || '0';
            followLengthValue.textContent = settings.followLength || '0';
            subLengthSlider.value = settings.subLength || '0';
            subLengthValue.textContent = settings.subLength || '0';

            winnerClaimCheckbox.checked = settings.winnerClaim || false;
            claimDurationInput.value = settings.claimDuration || '30';
            animationSelect.value = settings.animation || 'wheel';
            winners = storedWinners || [];
        } else {
            keywordInput.value = ''; winnerCountInput.value = '1'; subOnlyCheckbox.checked = false;
            subMultiplierSlider.value = '1'; subMultiplierValue.textContent = '1';
            followLengthSlider.value = '0'; followLengthValue.textContent = '0';
            subLengthSlider.value = '0'; subLengthValue.textContent = '0';
            winnerClaimCheckbox.checked = false; claimDurationInput.value = '30';
            animationSelect.value = 'wheel'; 
            winners = [];
        }
        updateWinnersListUI();
        updateClaimSettingsState();
    }

    function loadInitialState() {
        const lastChannel = localStorage.getItem('kickGiveawayLastChannel');
        if(lastChannel) channelInput.value = lastChannel;
    }
    
    async function handleLogin() {
        const channelName = channelInput.value.trim().toLowerCase();
        if (!channelName) { alert(translations[currentLang].alertEnterChannel); return; }
        connectButton.disabled = true; connectButton.textContent = translations[currentLang].connecting;
        try {
            const r = await fetch(`https://kick.com/api/v2/channels/${channelName}`);
            if (!r.ok) throw new Error(translations[currentLang].alertChannelNotFound);
            const data = await r.json();
            if (!data.chatroom?.id) throw new Error(translations[currentLang].alertChatroomIDError);
            
            kickChannelName = data.slug;
            kickChannelSlug = data.slug;
            kickChatroomId = data.chatroom.id;

            let startDate = new Date();
            if (data.user && data.user.email_verified_at) {
                startDate = new Date(data.user.email_verified_at);
            } else if (data.created_at) {
                startDate = new Date(data.created_at);
            }

            const now = new Date();
            const diffTime = Math.abs(now - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            
            followLengthSlider.max = diffDays;
            if (parseInt(followLengthSlider.value) > diffDays) {
                followLengthSlider.value = diffDays;
                followLengthValue.textContent = diffDays;
            }

            localStorage.setItem('kickGiveawayLastChannel', kickChannelName);
            connectedChannelName.textContent = kickChannelName;
            loadStateForChannel(kickChannelName);
            showScreen('main');
        } catch (err) {
            alert(translations[currentLang].alertLoginError(err.message));
        } finally {
            connectButton.disabled = false; connectButton.textContent = translations[currentLang].connectButton;
        }
    }

    const WS_URL = 'wss://ws-us2.pusher.com/app/32cbd69e4b950bf97679?protocol=7&client=js&version=8.4.0&flash=false';
    function connectToKickChat() {
        if (ws && ws.readyState === WebSocket.OPEN) ws.close();
        ws = new WebSocket(WS_URL);
        ws.onmessage = handleWebSocketMessage;
        ws.onerror = (err) => console.error(`WebSocket Error: ${err.message}`);
        ws.onclose = (ev)  => {
            console.warn(`WebSocket closed. Code: ${ev.code}`);
            if (isGiveawayRunning) { statusMessage.textContent = translations[currentLang].statusConnectionLost; statusMessage.className = 'status-error'; }
        };
    }
    
    function handleWebSocketMessage(e) {
        let pkt; try { pkt = JSON.parse(e.data); } catch { return; }
        const event = pkt.event;
        const data = pkt.data ? JSON.parse(pkt.data) : {};

        if (event === 'pusher:connection_established') {
            ws.send(JSON.stringify({ event: 'pusher:subscribe', data: { auth: '', channel: `chatrooms.${kickChatroomId}.v2` } }));
        } else if (event === 'pusher_internal:subscription_succeeded') {
            const modeText = translations[currentLang].statusConnected(giveawayKeyword);
            statusMessage.textContent = modeText;
            statusMessage.className = 'status-connected';
        } else if (event === 'App\\Events\\ChatMessageEvent') {
            handleChatMessage(data);
        }
    }

    function startGiveaway() {
        resetSession();
        giveawayKeyword = keywordInput.value.trim().toLowerCase();
        isGiveawayRunning = true;
        setSettingsState(true);
        connectToKickChat();
    }

    function handleChatMessage(msg) {
        if (lastClaimWinner && msg.sender.username.toLowerCase() === lastClaimWinner.name.toLowerCase()) {
            const li = document.createElement('li');
            li.textContent = `${msg.sender.username}: ${msg.content}`;
            claimChatLog.append(li);
            claimChatLog.scrollTop = claimChatLog.scrollHeight;
            if (claimInterval) {
                clearInterval(claimInterval);
                claimInterval = null;
                lastClaimWinner.confirmed = true;
                claimCountdown.textContent = translations[currentLang].claimConfirmed;
                claimCountdown.className = 'confirmed';
                claimConfirmButton.style.display = 'block';
                updateWinnersListUI();
                saveState();
            }
        }
        
        const modalWinner = modalChatWinners.find(w => w.name === msg.sender.username.toLowerCase());
        if (modalWinner) {
            if (modalWinner.mode === 'below') {
                if (modalWinner.logElement.style.display !== 'block') {
                    modalWinner.logElement.style.display = 'block';
                }
                const li = document.createElement('li');
                li.textContent = `${msg.sender.username}: ${msg.content}`;
                modalWinner.logElement.append(li);
                modalWinner.logElement.scrollTop = modalWinner.logElement.scrollHeight;
            } else if (modalWinner.mode === 'replace') {
                if (!modalWinner.hasChatStarted) {
                    modalWinner.hasChatStarted = true;
                    modalWinner.titleEl.textContent = `${translations[currentLang].modalWinnerTitle} ${msg.sender.username}`;
                    modalWinner.animationBoxEl.innerHTML = ''; 
                    modalWinner.animationBoxEl.style.display = 'block'; 

                    const newLog = document.createElement('ul');
                    newLog.className = 'modal-winner-chat-log';
                    newLog.style.display = 'block';
                    newLog.style.height = '100%';
                    newLog.addEventListener('wheel', preventPageScroll);
                    newLog.addEventListener('wheel', (e) => e.stopPropagation());
                    
                    modalWinner.animationBoxEl.appendChild(newLog);
                    modalWinner.logElement = newLog;
                }
                const li = document.createElement('li');
                li.textContent = `${msg.sender.username}: ${msg.content}`;
                modalWinner.logElement.append(li);
                modalWinner.logElement.scrollTop = modalWinner.logElement.scrollHeight;
            }
        }
        
        if (!isGiveawayRunning || participants.has(msg.sender.username)) return;
        const userMessage = msg.content.trim().toLowerCase();
        if (giveawayKeyword === '' || userMessage === giveawayKeyword) {
            addParticipant(msg.sender);
        }
    }

    
    function addParticipant(sender) {
        const existingLi = [...participantList.children].find(li => li.textContent === sender.username);
        if (existingLi) return;

        
        const subBadge = (sender.identity?.badges || []).find(b => b.type === 'subscriber' || b.type === 'founder');
        const isSub = !!subBadge;
        
        
        if (subOnlyCheckbox.checked && !isSub) return;

        
        const minSubMonths = parseInt(subLengthSlider.value) || 0;
        const userSubMonths = subBadge ? (subBadge.count || 0) : 0; 
        
        if (minSubMonths > 0 && userSubMonths < minSubMonths) return; 

        participants.add(sender.username);
        const entryCount = isSub ? parseInt(subMultiplierSlider.value) : 1;
        for (let i = 0; i < entryCount; i++) allEntries.push(sender.username);
        
        const li = document.createElement('li');
        li.textContent = sender.username;
        if (isSub) { 
            li.classList.add('subscriber'); 
            li.title = translations[currentLang].subscriberTitle(entryCount);
        }
        participantList.prepend(li);
        participantCount.textContent = participants.size;
        updateDrawButtonState();
    }

    
    async function checkFollowAge(channelSlug, username, minDays) {
        if (minDays <= 0) return true; 
        try {
            const r = await fetch(`https://kick.com/api/v2/channels/${channelSlug}/users/${username}`);
            if (!r.ok) return false;
            const data = await r.json();
            
            if (!data.following_since) return false; 
            
            const followDate = new Date(data.following_since);
            const now = new Date();
            const diffTime = Math.abs(now - followDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            return diffDays >= minDays;
        } catch (e) {
            console.error("Follow check failed", e);
            return null;
        }
    }

    
    
    function startPendingAnimation(requestedCount) {
        document.body.classList.add('modal-active');
        multiWinnerModalContainer.style.display = 'flex';
        multiWinnerModalContainer.innerHTML = ''; 

        const count = requestedCount;
        const topRowCount = (count <= 3) ? count : Math.ceil(count / 2);

        
        let row1, row2;
        row1 = document.createElement('div');
        row1.className = 'modal-row';
        multiWinnerModalContainer.appendChild(row1);

        if (count > 3) {
            row2 = document.createElement('div');
            row2.className = 'modal-row';
            multiWinnerModalContainer.appendChild(row2);
        }

        const selectedAnim = animationSelect.value;
        if (pendingAnimationInterval) clearInterval(pendingAnimationInterval);

        
        const animationBoxes = [];

        
        for (let i = 0; i < count; i++) {
            const modalInstance = modalTemplate.firstElementChild.cloneNode(true);
            if (i < topRowCount) row1.appendChild(modalInstance);
            else row2.appendChild(modalInstance);

            const content = modalInstance.querySelector('.modal-content');
            const titleEl = content.querySelector('.winner-title-text');
            titleEl.textContent = translations[currentLang].modalDrawing;
            const animationBox = content.querySelector('.winner-animation-box');
            
            
            const btn = content.querySelector('.modal-confirm-button');
            btn.style.visibility = 'hidden';

            animationBoxes.push(animationBox); 

            
            if (selectedAnim === 'wheel') {
                animationBox.innerHTML = `<div class="wheel-animation-container"><ul class="wheel-list" style="transform: none; transition: none;"></ul></div>`;
                const ul = animationBox.querySelector('ul');
                ul.style.animation = "infiniteSpin 0.15s linear infinite"; 
                
                populateWheelList(ul);
            } else if (selectedAnim === 'char-scramble') {
                animationBox.innerHTML = '<h1 class="winner-name"></h1>';
            } else {
                
                animationBox.innerHTML = '<h1 class="winner-name"></h1>';
            }
        }

        
        
        let pendingPool = allEntries.length > 0 ? allEntries : ["Wait...", "Loading...", "Drawing..."];
        while(pendingPool.length < 50) pendingPool = pendingPool.concat(pendingPool); 

        pendingAnimationInterval = setInterval(() => {
            animationBoxes.forEach(box => {
                if (selectedAnim === 'wheel') {
                    
                    
                    
                } else if (selectedAnim === 'char-scramble') {
                    const el = box.querySelector('h1');
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?*&%';
                    let output = '';
                    for(let i=0; i<10; i++) output += chars[Math.floor(Math.random() * chars.length)];
                    el.textContent = output;
                } else {
                    
                    const el = box.querySelector('h1');
                    el.textContent = pendingPool[Math.floor(Math.random() * pendingPool.length)];
                }
            });
        }, 60); 
    }

    function populateWheelList(ul) {
        let pendingPool = allEntries.length > 0 ? allEntries : ["Wait...", "Loading..."];
        
        for(let i=0; i<50; i++) {
            const li = document.createElement('li');
            li.textContent = pendingPool[i % pendingPool.length];
            ul.appendChild(li);
        }
    }

    function stopPendingAnimation() {
        if (pendingAnimationInterval) {
            clearInterval(pendingAnimationInterval);
            pendingAnimationInterval = null;
        }
    }

    async function drawWinner() {
        isDrawInProgress = true;
        updateDrawButtonState();
        resetButton.disabled = true;

        const requestedWinnerCount = parseInt(winnerCountInput.value) || 1;
        const useClaimFeature = winnerClaimCheckbox.checked && requestedWinnerCount === 1;

        
        let drawPool = [...allEntries];
        let potentialWinnersLeft = [...new Set(drawPool)].length;
        
        if (potentialWinnersLeft === 0) {
            alert(translations[currentLang].alertNoParticipants);
            finishDrawCycle();
            return;
        }
        
        
        const finalCountToDraw = Math.min(requestedWinnerCount, potentialWinnersLeft);

        const winnersToDraw = [];
        const minFollowDays = parseInt(followLengthSlider.value) || 0;

        
        
        startPendingAnimation(finalCountToDraw);

        
        let apiErrorOccurred = false;

        while (winnersToDraw.length < finalCountToDraw && potentialWinnersLeft > 0) {
            
            const winnerIndex = Math.floor(Math.random() * drawPool.length);
            const candidateName = drawPool[winnerIndex];
            
            let isValid = true;
            if (minFollowDays > 0) {

                const checkResult = await checkFollowAge(kickChannelSlug, candidateName, minFollowDays);
                

                if (checkResult === null) {
                    apiErrorOccurred = true;
                    break; 
                }

                isValid = checkResult;
                await new Promise(r => setTimeout(r, 200)); 
            }

            if (isValid) {
                
                const winnerData = { name: candidateName, timestamp: new Date().toISOString(), confirmed: !useClaimFeature };
                winnersToDraw.push(winnerData);
                
                
                drawPool = drawPool.filter(n => n !== candidateName);
                potentialWinnersLeft = [...new Set(drawPool)].length;
            } else {
                
                drawPool = drawPool.filter(n => n !== candidateName);
                potentialWinnersLeft = [...new Set(drawPool)].length;
            }
        }
        
        
        stopPendingAnimation();

        if (apiErrorOccurred) {
             document.body.classList.remove('modal-active');
             multiWinnerModalContainer.style.display = 'none';
             alert(translations[currentLang].alertApi);
             finishDrawCycle();
             return;
        }

        
        if (winnersToDraw.length === 0) {
             document.body.classList.remove('modal-active');
             multiWinnerModalContainer.style.display = 'none';
             alert(translations[currentLang].alertNoParticipants + " (Follow Length too strict?)");
             finishDrawCycle();
             return;
        }

        
        winners.push(...winnersToDraw);
        winnersToDraw.forEach(w => {
            allEntries   = allEntries.filter(n => n !== w.name); 
            participants.delete(w.name);                         
        });
        updateDrawButtonState();          
        updateWinnersListUI();
        
        
        await displayMultiWinnerModals(winnersToDraw, allEntries.concat(winnersToDraw.map(w=>w.name)), useClaimFeature);
        
        if (useClaimFeature) {
            lastClaimWinner = winnersToDraw[0];
        } 
    }

    function displayMultiWinnerModals(drawnWinners, fullPool, useClaimFeature) {
        return new Promise(resolve => {
            multiWinnerModalContainer.style.display = 'flex';
            
            
            
            
            

            const existingInstances = multiWinnerModalContainer.querySelectorAll('.modal-instance');
            const canReuse = existingInstances.length === drawnWinners.length;

            if (!canReuse) {
                
                multiWinnerModalContainer.innerHTML = '';
            }
            
            
            let row1, row2;
            if (!canReuse) {
                const count = drawnWinners.length;
                const topRowCount = (count <= 3) ? count : Math.ceil(count / 2);
                row1 = document.createElement('div');
                row1.className = 'modal-row';
                multiWinnerModalContainer.appendChild(row1);
                if (count > 3) {
                    row2 = document.createElement('div');
                    row2.className = 'modal-row';
                    multiWinnerModalContainer.appendChild(row2);
                }
            } else {
                 
            }
            
            const animationPromises = drawnWinners.map((winner, index) => {
                let modalWrapper;

                if (canReuse) {
                    modalWrapper = existingInstances[index];
                } else {
                    const count = drawnWinners.length;
                    const topRowCount = (count <= 3) ? count : Math.ceil(count / 2);
                    modalWrapper = modalTemplate.firstElementChild.cloneNode(true);
                    if (index < topRowCount) row1.appendChild(modalWrapper);
                    else row2.appendChild(modalWrapper);
                }

                const titleEl = modalWrapper.querySelector('.winner-title-text');
                const animationBoxEl = modalWrapper.querySelector('.winner-animation-box');
                const confirmButton = modalWrapper.querySelector('.modal-confirm-button');
                const chatLogEl = modalWrapper.querySelector('.modal-winner-chat-log');
                
                
                confirmButton.textContent = translations[currentLang].okButton;
                confirmButton.style.visibility = 'hidden'; 

                
                const newBtn = confirmButton.cloneNode(true);
                confirmButton.parentNode.replaceChild(newBtn, confirmButton);
                
                newBtn.addEventListener('click', () => {
                    modalWrapper.classList.add('is-hidden');
                    
                    const showChatLogsBelow = drawnWinners.length <= 3;
                    const replaceAnimationBoxMode = drawnWinners.length > 3;

                    if (showChatLogsBelow || replaceAnimationBoxMode) {
                        modalChatWinners = modalChatWinners.filter(w => w.name !== winner.name.toLowerCase());
                    }
                    
                    if (useClaimFeature && drawnWinners.length === 1) {
                        handleWinnerClaim();
                    }
                });

                modalWrapper.addEventListener('transitionend', (event) => {
                    if (event.propertyName === 'opacity' && modalWrapper.classList.contains('is-hidden')) {
                        const allInstances = multiWinnerModalContainer.querySelectorAll('.modal-instance');
                        const allHidden = [...allInstances].every(m => m.classList.contains('is-hidden'));
                        
                        if (allHidden) {
                            multiWinnerModalContainer.style.display = 'none';
                            document.body.classList.remove('modal-active');
                            
                            if (!useClaimFeature) {
                                finishDrawCycle();
                            }
                        }
                    }
                });

                
                return runDrawAnimation(fullPool, winner.name, animationBoxEl).then(() => {
                    titleEl.textContent = translations[currentLang].modalWinnerTitle;
                    newBtn.style.visibility = 'visible';

                    const showChatLogsBelow = drawnWinners.length <= 3;
                    const replaceAnimationBoxMode = drawnWinners.length > 3;

                    if (showChatLogsBelow) {
                        chatLogEl.addEventListener('wheel', preventPageScroll);
                        chatLogEl.addEventListener('wheel', (e) => e.stopPropagation());
                        modalChatWinners.push({ name: winner.name.toLowerCase(), logElement: chatLogEl, mode: 'below' });
                    } else if (replaceAnimationBoxMode) {
                        modalChatWinners.push({ 
                            name: winner.name.toLowerCase(), 
                            animationBoxEl: animationBoxEl, 
                            titleEl: titleEl, 
                            mode: 'replace', 
                            hasChatStarted: false 
                        });
                    }
                });
            });
            Promise.all(animationPromises).then(resolve);
        });
    }

    function runDrawAnimation(pool, finalWinner, animationBoxEl) {
        return new Promise((resolve) => {
            const animationType = animationSelect.value;
            const animations = {
                'slot-machine': animateSlotMachine,
                'char-scramble': animateCharScramble,
                'wheel': animateWheel,
            };
            animations[animationType](pool, finalWinner, animationBoxEl, resolve);
        });
    }

    function animateSlotMachine(pool, finalWinner, animationBoxEl, resolve) {
        
        
        
        animationBoxEl.innerHTML = '<h1 class="winner-name"></h1>'; 
        const winnerNameEl = animationBoxEl.querySelector('.winner-name');
        const localInterval = setInterval(() => {
            winnerNameEl.textContent = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : '...';
        }, 75);
        setTimeout(() => { 
            clearInterval(localInterval); 
            winnerNameEl.textContent = finalWinner; 
            winnerNameEl.classList.add('winner'); 
            resolve(); 
        }, 3500);
    }

    function animateCharScramble(pool, finalWinner, animationBoxEl, resolve) {
        animationBoxEl.innerHTML = '<h1 class="winner-name"></h1>'; 
        const winnerNameEl = animationBoxEl.querySelector('.winner-name');
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?*&%';
        let frame = 0; const totalFrames = 150;
        const localInterval = setInterval(() => {
            let output = ''; let completed = true;
            for (let i = 0; i < finalWinner.length; i++) {
                const from = finalWinner[i], to = chars[Math.floor(Math.random() * chars.length)];
                const progress = Math.min(frame / (totalFrames * 0.5 + i * 5), 1);
                if (progress < 1) completed = false;
                output += (Math.random() < progress) ? from : to;
            }
            winnerNameEl.textContent = output;
            if (completed) { 
                clearInterval(localInterval); 
                winnerNameEl.classList.add('winner'); 
                resolve(); 
            }
            frame++;
        }, 40);
    }
    
    function animateWheel(pool, finalWinner, animationBoxEl, resolve) {
        animationBoxEl.innerHTML = `<div class="wheel-animation-container"><ul class="wheel-list"></ul></div>`;
        const wheelContainer = animationBoxEl.querySelector('.wheel-animation-container');
        const wheelList = animationBoxEl.querySelector('.wheel-list');
        

        let uniquePool = [...new Set(pool)];
        

        let noisePool = uniquePool.filter(n => n !== finalWinner);


        if (noisePool.length === 0) noisePool = ["User1", "User2", "User3"];
        while (noisePool.length < 5) noisePool = noisePool.concat(noisePool); 
        

        const cycles = Math.ceil(200 / noisePool.length);
        let repeatedPool = [];
        for (let c = 0; c < cycles; c++) {
            const shuffled = [...noisePool];

            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            repeatedPool.push(...shuffled);
        }
        

        const targetIndex = repeatedPool.length - Math.floor(noisePool.length / 2) - 1;
        repeatedPool[targetIndex] = finalWinner;
        

        repeatedPool.forEach((name, index) => {
            const li = document.createElement('li');
            li.textContent = name;
            if (index === targetIndex) li.classList.add('winner');
            wheelList.appendChild(li);
        });


        setTimeout(() => {
            const containerStyle = window.getComputedStyle(wheelContainer);
            const itemStyle = window.getComputedStyle(wheelList.querySelector('li'));
            const containerHeight = parseFloat(containerStyle.height);
            const itemHeight = parseFloat(itemStyle.height);
            const finalY = (containerHeight / 2) - (targetIndex * itemHeight) - (itemHeight / 2);
            wheelList.style.transform = `translateY(${finalY}px)`;
        }, 100);

        wheelList.addEventListener('transitionend', () => {
            wheelList.classList.add('finished');
            resolve();
        }, { once: true });
    }

    function handleWinnerClaim() {
        claimSection.style.display = 'flex';
        claimWinnerName.textContent = lastClaimWinner.name;
        
        claimCountdown.className = '';
        claimConfirmButton.style.display = 'none';
        
        if (claimChatLog.children.length > 0) {
            lastClaimWinner.confirmed = true;
            claimCountdown.textContent = translations[currentLang].claimConfirmed;
            claimCountdown.className = 'confirmed';
            claimConfirmButton.style.display = 'block';
            updateWinnersListUI();
            saveState();
            claimInterval = null; 
        } else {
            let t = parseInt(claimDurationInput.value);
            claimCountdown.textContent = translations[currentLang].claimCountdownText(lastClaimWinner.name, t);
            claimInterval = setInterval(() => {
                t--;
                claimCountdown.textContent = translations[currentLang].claimCountdownText(lastClaimWinner.name, t);
                if (t <= 0) {
                    clearInterval(claimInterval);
                    claimInterval = null;
                    claimCountdown.textContent = translations[currentLang].claimFailed;
                    claimCountdown.className = 'failed';
                    claimConfirmButton.style.display = 'block';
                    lastClaimWinner.confirmed = 'failed';
                    updateWinnersListUI();
                    saveState();
                }
            }, 1000);
        }
    }
    
    function finishDrawCycle() {
        isDrawInProgress = false;
        lastClaimWinner = null;
        if (claimInterval) { clearInterval(claimInterval); claimInterval = null; }
        claimSection.style.display = 'none';
        claimChatLog.innerHTML = '';
        modalChatWinners = [];
        resetButton.disabled = false;
        updateDrawButtonState();
        saveState();
    }
    
    function updateWinnersListUI() {
        winnersList.innerHTML = '';
        winners.forEach(winner => {
            const li = document.createElement('li');
            if (winner.confirmed === true) li.classList.add('confirmed');
            if (winner.confirmed === 'failed') li.classList.add('failed');
            const nameSpan = document.createElement('span');
            nameSpan.className = 'winner-name-span';
            nameSpan.textContent = winner.name;
            nameSpan.title = winner.name; 
            const dateSpan = document.createElement('span');
            dateSpan.className = 'winner-date-span';
            const locale = currentLang === 'tr' ? 'tr-TR' : 'en-US';
            dateSpan.textContent = new Date(winner.timestamp).toLocaleString(locale, { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            li.appendChild(nameSpan); li.appendChild(dateSpan);
            winnersList.prepend(li);
        });
        winnersCount.textContent = winners.length;
    }

    function resetSession() {
        if (ws && ws.readyState === WebSocket.OPEN) ws.close();
        isGiveawayRunning = false;
        setSettingsState(false);
        statusMessage.textContent = translations[currentLang]?.statusWaiting || translations['en'].statusWaiting;
        statusMessage.className = 'status-waiting';
        participants.clear();
        allEntries = [];
        participantList.innerHTML = '';
        participantCount.textContent = '0';
        claimChatLog.innerHTML = '';
        modalChatWinners = [];
        updateDrawButtonState();
    }

    function updateClaimSettingsState() {
        const isMultiWinner = parseInt(winnerCountInput.value) > 1;
        winnerClaimCheckbox.disabled = isMultiWinner;
        if (isMultiWinner) winnerClaimCheckbox.checked = false;
        claimDurationInput.disabled = isMultiWinner || !winnerClaimCheckbox.checked;
    }

    function preventPageScroll(event) {
        const element = event.currentTarget; 
        const { scrollTop, scrollHeight, clientHeight } = element;
        const deltaY = event.deltaY;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        const isAtTop = scrollTop === 0;
        if ((deltaY > 0 && isAtBottom) || (deltaY < 0 && isAtTop)) {
            event.preventDefault();
        }
    }
    
    function init() {
        const savedLang = localStorage.getItem('kickawayLang');
        const browserLang = navigator.language.split('-')[0];
        const initialLang = savedLang || (browserLang === 'tr' ? 'tr' : 'en');
        
        languageSwitcher.innerHTML = `
            <button id="lang-tr-button" class="small-button">Türkçe</button>
            <button id="lang-en-button" class="small-button">English</button>
        `;
        languageSwitcher.querySelector('#lang-tr-button').addEventListener('click', () => setLanguage('tr'));
        languageSwitcher.querySelector('#lang-en-button').addEventListener('click', () => setLanguage('en'));
        
        setLanguage(initialLang);
        
        loadInitialState();
        connectButton.addEventListener('click', handleLogin);
        channelInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') connectButton.click(); });
        headerMenuToggle.addEventListener('click', () => headerMenuDropdown.classList.toggle('active'));
        window.addEventListener('click', (e) => { if (!headerMenuContainer.contains(e.target)) headerMenuDropdown.classList.remove('active'); });
        changeChannelButton.addEventListener('click', () => { if (confirm(translations[currentLang].confirmChangeChannel)) { showScreen('login'); resetSession(); } });
        clearAllDataButton.addEventListener('click', () => { if (confirm(translations[currentLang].confirmClearAllData)) { localStorage.removeItem('kickGiveawayDB'); window.location.reload(); } });
        
        winnerCountInput.addEventListener('input', () => {
            let value = parseInt(winnerCountInput.value);
            if (isNaN(value) || value < 1) winnerCountInput.value = 1;
            if (value > 10) winnerCountInput.value = 10;
            updateClaimSettingsState();
        });
        
        winnerClaimCheckbox.addEventListener('change', updateClaimSettingsState);
        startGiveawayButton.addEventListener('click', startGiveaway);
        drawButton.addEventListener('click', drawWinner);
        resetButton.addEventListener('click', resetSession);
        claimConfirmButton.addEventListener('click', finishDrawCycle);
        settingsPanel.addEventListener('change', saveState);
        
        
        subMultiplierSlider.addEventListener('input', (e) => { subMultiplierValue.textContent = e.target.value; saveState(); });
        followLengthSlider.addEventListener('input', (e) => { followLengthValue.textContent = e.target.value; saveState(); });
        subLengthSlider.addEventListener('input', (e) => { subLengthValue.textContent = e.target.value; saveState(); });

        updateClaimSettingsState();

        const scrollableElements = document.querySelectorAll(
            '#participant-list, #winners-list, #claim-chat-log, #multi-winner-modal-container'
        );
        
        scrollableElements.forEach(el => {
            el.addEventListener('wheel', preventPageScroll);
        });
    }
    init();
});