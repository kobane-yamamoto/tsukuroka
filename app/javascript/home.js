// Turboがあればturbo:load、なければDOMContentLoadedで起動
(function(){
  const ready = (fn)=> {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
    document.addEventListener('turbo:load', fn);
  };

  ready(function(){
    const markBtn = document.getElementById('markSelectedPurchasedBtn');
    const toggleBtn = document.getElementById('togglePurchasedBtn');
    const regenBtn  = document.getElementById('regenerateMenuBtn');
    let hidePurchased = false;

    function updateHidden(){
      document.querySelectorAll('.buy-item[data-purchased="true"]').forEach(li=>{
        li.style.display = hidePurchased ? 'none' : '';
      });
      if (toggleBtn) toggleBtn.textContent = hidePurchased ? '購入済みを表示' : '購入済みを非表示';
    }

    markBtn && markBtn.addEventListener('click', ()=>{
      document.querySelectorAll('.buy-item input[type="checkbox"]:checked').forEach(cb=>{
        const li = cb.closest('.buy-item');
        li.dataset.purchased = 'true';
        cb.checked = false;
      });
      updateHidden();
    });

    toggleBtn && toggleBtn.addEventListener('click', ()=>{
      hidePurchased = !hidePurchased;
      updateHidden();
    });

    regenBtn && regenBtn.addEventListener('click', ()=>{
      alert('（ダミー）献立を再生成します。サーバー側処理と接続してください。');
    });
  });
})();
