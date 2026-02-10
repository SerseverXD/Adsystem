<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    <style>
        * { box-sizing: border-box; -webkit-user-drag: none; }
        body { margin: 0; padding: 0; overflow: hidden; background: transparent; font-family: 'Roboto', sans-serif; }
        
        /* Container Setup */
        .ad-container { 
            position: relative; 
            width: 320px; 
            height: 50px; 
            background: #eee; 
            margin: 0 auto;
            overflow: hidden;
        }

        /* Prevent Image Download/Drag */
        img { pointer-events: none; user-select: none; }

        /* Initial Controls */
        .ad-controls { 
            position: absolute; 
            top: 1px; 
            right: 1px; 
            display: flex; 
            gap: 1px; 
            z-index: 1001; 
        }

        .ad-control-btn { 
            background: white; 
            border: none; 
            width: 18px; 
            height: 18px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            cursor: pointer; 
            padding: 0; 
        }

        .ad-control-btn i { color: #0AADCC; font-size: 1rem; }
        .ad-choice-icon { width: 0.9rem; height: 0.9rem; object-fit: contain; }

        /* Overlay Banners */
        .overlay-banner {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: #f1f1f1;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }

        .back-arrow {
            position: absolute;
            top: 0; left: 0;
            padding: 2px;
            cursor: pointer;
            color: #5f6368;
            font-size: 18px !important;
        }

        .banner-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            color: #5f6368;
            margin-bottom: 4px;
        }

        /* Button Layouts */
        .btn-row { display: flex; gap: 8px; }

        /* Material Legacy Buttons */
        .md-btn {
            position: relative;
            height: 24px;
            padding: 0 12px;
            font-size: 11px;
            font-weight: 500;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            text-decoration: none;
            transition: opacity 0.3s ease;
        }

        .btn-blue { background: #1a73e8; color: white; }
        .btn-white { background: white; border: 1px solid #dadce0; color: #3c4043; }
        
        .md-btn::after {
            content: ""; position: absolute; inset: 0;
            background-color: rgba(0, 0, 0, 0.05);
            opacity: 0; transition: opacity 150ms; border-radius: inherit;
        }
        .md-btn:hover::after { opacity: 1; }

        /* Report Buttons */
        .report-grid { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .report-btn {
            background: #fff;
            border: 1px solid #dadce0;
            border-radius: 12px;
            padding: 2px 8px;
            font-size: 10px;
            cursor: pointer;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        /* Animations */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-in { animation: fadeIn 0.6s ease forwards; }

        #ad-closed-msg {
            font-family: 'Montserrat', sans-serif;
            font-size: 13px;
            color: #3c4043;
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="ad-container" id="main-container">
        <div id="ad-view">
            <div class="ad-controls">
                <button class="ad-control-btn" onclick="showMenu()">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/AdChoices_Icon.png" class="ad-choice-icon" alt="">
                </button>
                <button class="ad-control-btn" onclick="showMenu()">
                    <i class="fa-solid fa-ellipsis-v"></i>
                </button>
            </div>
            
            <div id="ad-script-container">
                <script type="text/javascript">
                    atOptions = { 'key' : '0d34b9906a176c3865604125d630f282', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {} };
                </script>
                <script type="text/javascript" src="https://www.highperformanceformat.com/0d34b9906a176c3865604125d630f282/invoke.js"></script>
            </div>
        </div>

        <div id="menu-overlay" class="overlay-banner">
            <span class="material-symbols-outlined back-arrow" onclick="closeOverlays()">arrow_back</span>
            <div class="banner-title">Ads by Sergio</div>
            <div class="btn-row">
                <button class="md-btn btn-blue" onclick="showReport()">Stop seeing this ad</button>
                <button class="md-btn btn-white" onclick="window.open('https://google.com/ads/answer/1634057', '_blank')">
                    Why this ad? &nbsp; 
                    <img src="https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png" style="width:12px; height:12px;">
                </button>
            </div>
        </div>

        <div id="report-overlay" class="overlay-banner">
            <span class="material-symbols-outlined back-arrow" onclick="showMenu()">arrow_back</span>
            <div class="banner-title">What's wrong with this ad?</div>
            <div class="report-grid">
                <button class="report-btn" onclick="closeAdFinal()">Seen multiple times</button>
                <button class="report-btn" onclick="closeAdFinal()">Covering content</button>
                <button class="report-btn" onclick="closeAdFinal()">Inappropriate</button>
            </div>
        </div>

        <div id="closed-overlay" class="overlay-banner">
            <div id="ad-closed-msg" class="fade-in">Ad closed by Sergio</div>
        </div>
    </div>

    <script>
        function showMenu() {
            document.getElementById('ad-view').style.display = 'none';
            document.getElementById('menu-overlay').style.display = 'flex';
        }

        function showReport() {
            document.getElementById('menu-overlay').style.display = 'none';
            document.getElementById('report-overlay').style.display = 'flex';
        }

        function closeOverlays() {
            document.getElementById('menu-overlay').style.display = 'none';
            document.getElementById('report-overlay').style.display = 'none';
            document.getElementById('ad-view').style.display = 'block';
        }

        function closeAdFinal() {
            document.getElementById('report-overlay').style.display = 'none';
            document.getElementById('closed-overlay').style.display = 'flex';
            
            // Logic for "Permanent Supporter" - if they report, we refresh the ad content after 3 seconds
            setTimeout(() => {
                location.reload(); 
            }, 3000);
        }
    </script>

</body>
</html>

