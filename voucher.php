<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <style>
    *,body{
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .main{
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 180px;
      border: 1px solid black;
      padding: 0 1px;
    }
    .main::before{
      content: "";
      display: inline;
      margin-top: -100px;
      top: 0;
      position: absolute;
      border-top: 230px solid transparent;
      border-left: 50px solid transparent;
      border-right:140px solid #DCDCDC; 
    }
    .header{
      font-size: 10px;
    }
    .row{
      display: flex;
      flex-direction: row;
      position: relative;
    }
    .aktiv{
      font-size: 10px;
    }
    .info{
      font-size: 8px;
    }
    .col{
/*      border: 1px solid black;*/
      width: 50%;
    }
    .kode h4{
      border-top: 2px solid black;
      border-bottom: 2px solid black;
    }
    .qr{
      position: absolute;
      right: 1px;
      bottom: -13px;
      width: 60px;
      height: 59px;
      border: 1px solid black;
      z-index: 1;
    }
    .footer{
      position: relative;
      bottom: 0;
      font-size: 12px;
      text-align: left;
    }
  </style>
  <div class="main">
    <div class="header">Layanan internet bebas kuota</div>
    <div class="row">
      <div class="col">
        <div class="logo">34.net</div>
        <div class="kode vc">
          <small>code voucher</small>
          <h4>%username%</h4>
        </div>
        <div class="up">
          <small>Member</small>
          <div class="uname">%username%</div>
          <div class="pass">%password%</div>
        </div>
        <div class="info">
          <p>sambungkan ke %dsnName%</p>
        </div>
      </div>
      <div class="col">
        <div class="harga"><small>%currency%</small> %price%</div>
        <div class="aktiv">masa aktiv : %validity%</div>
        <div class="qr">%qrCode%</div>
      </div>
    </div>
    <div class="footer">wa : 08998978675</div>
  </div>
</body>
</html>