var photoClick = 0;

Vue.component('simple-counter', {
  template: '<button v-on:click="counter++">Like<span>{{counter}}</span></button>',
  
  data: function () {
    return {
      get counter(){
        return localStorage.getItem('counter');
    }, 
      set counter(value) {
          localStorage.setItem('counter', value);
        }
      };
    }
});


Vue.component("item", {
  template: "#photo-box",
  props: ["item_data", "addphotos"],
  methods: {
    addItem: function(item_data) {
      if (item_data) {
        photoClick += 1;
        if (photoClick >= 1) {
          this.pushData();
        } else {
          return 0;
        }
      } else {
       return 0;
      }
    },
    pushData: function() {
      this.$parent.addphotos.push({
        img: this.item_data.img,
      });
    },
  }
});

Vue.component("addphoto", {
  template: "#addphoto-box",
  props: ["add_picture", "addphotos"],
  methods: {
    removeItem: function(add_picture) {
      var index = this.$parent.addphotos.indexOf(add_picture);
      this.$parent.addphotos.splice(index, 1);
      if (add_picture) {
        photoClick = 1;
      } 
    }, 
  }
});

var app = new Vue({
  el: "#app",
  data: {
    photos: [
      {
        img: "https://images.unsplash.com/photo-1520639221359-ad5e91f01cfd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIxOTUyfQ&s=31d2d4b4e31a59ed754796530f93e314",
      },
      
      
      {
        img: "https://images.unsplash.com/photo-1520636746439-19c15448bba3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIxOTUyfQ&s=10d8e11e8a1ee2975a1315ceaa5d8d53",
      },
      
      
      {
        img: "https://images.unsplash.com/photo-1520631023082-a5fe1cf21c5f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIxOTUyfQ&s=f03c6c372baaf6f5a9f8ab11c9be370d",
      },
      {
        img: "https://images.unsplash.com/photo-1521612400846-315c8152f2fb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIxOTUyfQ&s=0a94fff87d96a89a67d83e431d61bc87",
      },
      
      
       {
        img: "https://images.unsplash.com/photo-1521605481207-5b41d21b26a8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIxOTUyfQ&s=a1bd754321eb6de5523d14a4c109010c",
      },
      
      
      {
        img: "https://images.unsplash.com/photo-1521661978458-5a2bec6b6e09?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIxOTUyfQ&s=eefcd7daee5756560fdbf1f855cba19f",
      }
    ],
    addphotos: []
  },
});
