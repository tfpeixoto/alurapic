import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, bind, vnode) {
    let current = 0;

    el.addEventListener('dblclick', function () {
      let increment = bind.value || 90;
      let effect;

      if (!bind.arg || bind.arg == 'rotate') {

        if (bind.modifiers.reverse) {
          current -= increment;
        } else {
          current += increment;
        }
        effect = `rotate(${current}deg)`;

      } else if (bind.arg == 'scale') {
        effect = `scale(${increment})`;
      }

      el.style.transform = effect;

      if (bind.modifiers.animate) el.style.transition = 'transform .5s';
    })
  }
});