
class DropDown{
  static init(){
    this.domCache();
    this.bindEvents();
  }
  static domCache(){
    this.menu = document.querySelector('.menu');
    this.head = this.menu.querySelector('.head');
    this.caret = this.menu.querySelector('.caret');
    this.options = this.menu.querySelector('.options');
    this.optionsList = this.menu.querySelectorAll('.options li');
    this.selected = this.menu.querySelector('.selected');
  }
  static bindEvents(){
    this.head.addEventListener('click', this.headClk.bind(this));
    this.optionsList.forEach((e)=>{
      e.addEventListener('click', this.optionsListClk.bind(this, e));
  })
  }

  static headClk(){
    this.caret.classList.toggle('caret-rotate');
    this.options.classList.toggle('show-option')
  }

  static optionsListClk(e){
    this.caret.classList.remove('caret-rotate');
    this.options.classList.remove('show-option');
    this.optionsList.forEach((opt)=>{
      opt.classList.remove('active')
    })
    e.classList.add('active')
  }
}

DropDown.init();