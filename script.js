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
            winnerClaimLabel: 'Kazanan onayı (tekli kazananda)',
            claimDurationLabel: 'Onay Süresi (saniye):',
            animationLabel: 'Çekiliş Animasyonu:',
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
            modalWinnerTitle: 'Kazanan:',
            
            alertEnterChannel: 'Lütfen bir kanal adı girin.',
            alertLoginError: (msg) => `Giriş hatası: ${msg}`,
            alertChannelNotFound: 'Kanal bulunamadı veya API hatası.',
            alertChatroomIDError: 'Chatroom ID alınamadı.',
            alertNoParticipants: 'Çekilişe katılan kimse yok!',
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
            winnerClaimLabel: 'Winner confirmation (for single winner)',
            claimDurationLabel: 'Confirmation Time (seconds):',
            animationLabel: 'Giveaway Animation:',
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
            modalWinnerTitle: 'Winner:',
            
            alertEnterChannel: 'Please enter a channel name.',
            alertLoginError: (msg) => `Login error: ${msg}`,
            alertChannelNotFound: 'Channel not found or API error.',
            alertChatroomIDError: 'Could not get Chatroom ID.',
            alertNoParticipants: 'There are no participants in the giveaway!',
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

    let kickChannelName = '', kickChatroomId  = null, ws = null;
    let giveawayKeyword = '', isGiveawayRunning = false, isDrawInProgress = false;
    let participants   = new Set(), allEntries = [], winners = [];
    let modalChatWinners = [], claimInterval = null, lastClaimWinner = null;

    function showScreen(scr) {
        loginScreen.style.display = 'none';
        mainScreen.style.display = 'none';
        if (scr === 'login') loginScreen.style.display = 'flex';
        if (scr === 'main') mainScreen.style.display = 'block';
    }

    function setSettingsState(disabled) {
        settingsPanel.querySelectorAll('input:not([type="checkbox"]), select, button#start-giveaway-button').forEach(el => el.disabled = disabled);
        subOnlyCheckbox.disabled = disabled;
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
            winnerClaimCheckbox.checked = settings.winnerClaim || false;
            claimDurationInput.value = settings.claimDuration || '30';
            animationSelect.value = settings.animation || 'wheel';
            winners = storedWinners || [];
        } else {
            keywordInput.value = ''; winnerCountInput.value = '1'; subOnlyCheckbox.checked = false;
            subMultiplierSlider.value = '1'; subMultiplierValue.textContent = '1';
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
            const r = await fetch(`https://kick.com/api/v1/channels/${channelName}`);
            if (!r.ok) throw new Error(translations[currentLang].alertChannelNotFound);
            const data = await r.json();
            if (!data.chatroom?.id) throw new Error(translations[currentLang].alertChatroomIDError);
            kickChannelName = channelName; kickChatroomId = data.chatroom.id;
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
        if (existingLi) {
            return; 
        }

        const isSub = (sender.identity?.badges || [])
            .some(b => b.type === 'subscriber' || b.type === 'founder');
        if (subOnlyCheckbox.checked && !isSub) return;
        
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
    

    async function drawWinner() {
        isDrawInProgress = true;
        updateDrawButtonState();
        resetButton.disabled = true;

        const requestedWinnerCount = parseInt(winnerCountInput.value) || 1;
        const useClaimFeature = winnerClaimCheckbox.checked && requestedWinnerCount === 1;

        const drawPool = [...allEntries];
        const uniqueParticipantCount = new Set(drawPool).size;
        const finalWinnerCount = Math.min(requestedWinnerCount, uniqueParticipantCount);

        if (finalWinnerCount === 0) {
            alert(translations[currentLang].alertNoParticipants);
            finishDrawCycle();
            return;
        }

        const winnersToDraw = [];
        let tempDrawPool = [...drawPool];
        for (let i = 0; i < finalWinnerCount; i++) {
            const winnerIndex = Math.floor(Math.random() * tempDrawPool.length);
            const winnerName  = tempDrawPool[winnerIndex];
            tempDrawPool = tempDrawPool.filter(n => n !== winnerName);
            const winnerData = { name: winnerName, timestamp: new Date().toISOString(), confirmed: !useClaimFeature };
            winnersToDraw.push(winnerData);
        }
        
        winners.push(...winnersToDraw);
        winnersToDraw.forEach(w => {
            allEntries   = allEntries.filter(n => n !== w.name); 
            participants.delete(w.name);                         
        });
        updateDrawButtonState();          
        updateWinnersListUI();
        
        await displayMultiWinnerModals(winnersToDraw, drawPool, useClaimFeature);
        
        if (useClaimFeature) {
            lastClaimWinner = winnersToDraw[0];
        } 
    }

    function displayMultiWinnerModals(drawnWinners, fullPool, useClaimFeature) {
        return new Promise(resolve => {
            document.body.classList.add('modal-active');
            multiWinnerModalContainer.innerHTML = '';
            multiWinnerModalContainer.style.display = 'flex';
            
            const showChatLogsBelow = drawnWinners.length <= 3;
            const replaceAnimationBoxMode = drawnWinners.length > 3;
            const count = drawnWinners.length;
            const topRowCount = (count <= 3) ? count : Math.ceil(count / 2);

            const row1 = document.createElement('div');
            row1.className = 'modal-row';
            multiWinnerModalContainer.appendChild(row1);

            let row2;
            if (count > 3) {
                row2 = document.createElement('div');
                row2.className = 'modal-row';
                multiWinnerModalContainer.appendChild(row2);
            }
            
            const animationPromises = drawnWinners.map((winner, index) => {
                const modalWrapper = modalTemplate.firstElementChild.cloneNode(true);
                const titleEl = modalWrapper.querySelector('.winner-title-text');
                titleEl.textContent = translations[currentLang].modalDrawing;
                const animationBoxEl = modalWrapper.querySelector('.winner-animation-box');
                const confirmButton = modalWrapper.querySelector('.modal-confirm-button');
                confirmButton.textContent = translations[currentLang].okButton;
                const chatLogEl = modalWrapper.querySelector('.modal-winner-chat-log');

                if (index < topRowCount) {
                    row1.appendChild(modalWrapper);
                } else {
                    row2.appendChild(modalWrapper);
                }

                confirmButton.addEventListener('click', () => {
                    modalWrapper.classList.add('is-hidden');
                    
                    if (showChatLogsBelow || replaceAnimationBoxMode) {
                        modalChatWinners = modalChatWinners.filter(w => w.name !== winner.name.toLowerCase());
                    }
                    
                    if (useClaimFeature && drawnWinners.length === 1) {
                        handleWinnerClaim();
                    }
                });

                modalWrapper.addEventListener('transitionend', (event) => {
                    if (event.propertyName === 'opacity' && modalWrapper.classList.contains('is-hidden')) {
                        if ([...row1.children, ...(row2 ? row2.children : [])].every(m => m.classList.contains('is-hidden'))) {
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
                    confirmButton.style.visibility = 'visible';

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
        animationBoxEl.innerHTML = '<h1 class="winner-name winner"></h1>';
        const winnerNameEl = animationBoxEl.querySelector('.winner-name');
        const localInterval = setInterval(() => {
            winnerNameEl.textContent = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : '...';
        }, 75);
        setTimeout(() => { clearInterval(localInterval); winnerNameEl.textContent = finalWinner; resolve(); }, 3500);
    }

    function animateCharScramble(pool, finalWinner, animationBoxEl, resolve) {
        animationBoxEl.innerHTML = '<h1 class="winner-name winner"></h1>';
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
            if (completed) { clearInterval(localInterval); resolve(); }
            frame++;
        }, 40);
    }
    
    function animateWheel(pool, finalWinner, animationBoxEl, resolve) {
        animationBoxEl.innerHTML = `<div class="wheel-animation-container"><ul class="wheel-list"></ul></div>`;
        const wheelContainer = animationBoxEl.querySelector('.wheel-animation-container');
        const wheelList = animationBoxEl.querySelector('.wheel-list');
        
        let uniquePool = [...new Set(pool)];
        if (uniquePool.length === 0) uniquePool.push(finalWinner);
        
        for (let i = uniquePool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[uniquePool[i], uniquePool[j]] = [uniquePool[j], uniquePool[i]]; }
        const cycles = Math.ceil(200 / uniquePool.length);
        let repeatedPool = [];
        for (let c = 0; c < cycles; c++) {
            const shuffled = [...uniquePool];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            repeatedPool.push(...shuffled);
        }
        const targetIndex = repeatedPool.length - Math.floor(uniquePool.length / 2) - 1;
        const winnerIsInPool = repeatedPool.includes(finalWinner);
        if (!winnerIsInPool) {
            repeatedPool[targetIndex] = finalWinner;
        } else {
            const currentIndex = repeatedPool.indexOf(finalWinner);
            [repeatedPool[currentIndex], repeatedPool[targetIndex]] = [repeatedPool[targetIndex], repeatedPool[currentIndex]];
        }
        repeatedPool = repeatedPool.filter((name, idx) => idx === targetIndex || name !== finalWinner);
        const newWinnerIndex = repeatedPool.indexOf(finalWinner);
        
        repeatedPool.forEach((name, index) => {
            const li = document.createElement('li');
            li.textContent = name;
            if (index === newWinnerIndex) li.classList.add('winner');
            wheelList.appendChild(li);
        });

        setTimeout(() => {
            const containerStyle = window.getComputedStyle(wheelContainer);
            const itemStyle = window.getComputedStyle(wheelList.querySelector('li'));
            const containerHeight = parseFloat(containerStyle.height);
            const itemHeight = parseFloat(itemStyle.height);
            const finalY = (containerHeight / 2) - (newWinnerIndex * itemHeight) - (itemHeight / 2);
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