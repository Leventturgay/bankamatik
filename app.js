var hesapA = {
  ad: `Sena Turan`,
  hesapNo: `12345678`,
  bakiye: `2000`,
  ekHesap: `1000`,
};

var hesapB = {
  ad: `Emel Turan`,
  hesapNo: `12345789`,
  bakiye: `3000`,
  ekHesap: `2000`,
};
function paraCek(hesap, miktar) {
  console.log(`Merhaba ${hesap.ad}`);

  if (hesap.bakiye >= miktar) {
    hesap.bakiye = hesap.bakiye - miktar;
    console.log(`Paranızı Alabilirsiniz`);
  } else {
    var toplam = hesap.bakiye + hesap.ekHesap;
    if (toplam >= miktar) {
      if (confirm(`Ek hesabınızı Kullanmak İster misiniz?`)) {
        console.log(`Paranızı Alabilirsiniz`);
        var bakiye = hesap.bakiye;
        var ekHesap = miktar - bakiye;
        hesap.bakiye = 0;
        hesap.ekHesap = hesap.ekHesap - ekHesap;
      } else {
        console.log(
          `${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır`
        );
      }
    } else {
      console.log(`Üzgünüz bakiye yetersiz`);
    }
  }
}
paraCek(hesapA, 2000);
paraCek(hesapA, 2000);
