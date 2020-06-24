window.addEventListener('load', (event) => {
  let h = '<p>スクリプトで追加しました。</p>';
  let p = document.querySelector('p');
  p.insertAdjacentHTML('afterend', h)
});
