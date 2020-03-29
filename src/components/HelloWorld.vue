<template>
    <div class="hello">
      <div>
          <p style="text-align: center;">
              <span class="lover-image">
                <a class="lover" style="backgroundPosition: center" :style="{backgroundImage:`url(${require('../assets/icon2.jpeg')})`}"></a>
                <i class="icon-heart" />
                <a class="lover" :style="{backgroundImage:`url(${require('../assets/icon1.jpeg')})`}"></a>
              </span>
            </p>
            <p style="text-align: center;" class="day">我们的第 {{ Math.floor((endDate - startDate) / 86400000)}} 天</p>
            <p style="text-align: center;"> 「邂逅相遇，与子偕臧」 </p>
      </div>
      <p> 我们的恋爱清单，记录着我们很多的第一次，相信我们还会留下更多美好的回忆。 </p>
      <light-timeline style="margin-top: 30px;" :items='items'></light-timeline>
      <!-- <vue-audio file="file" /> -->
    </div>
  </template>
  
  <script>
    export default {
    name: 'hello',
    components: {
    },
    data () {
      return {
        startDate: 1585411200000,
        endDate: new Date().getTime(),
        items: [
          {
            tag: '03/29 10:03',
            type: 'star',
            color: '#49f589',
            content: '我们第一次约会'
          },
          {
            tag: '03/29 20:59',
            type: 'circle',
            color: 'orange',
            content: '第一次微信电话'
          },
          {
            tag: '03/29 21:32',
            type: 'circle',
            content: '提到的第一支乐队 「MONO」'
          },
          {
            tag: '...',
            type: 'circle',
            color: '#49f589',
            content: '未完待续'
          }
        ]
      }
    }
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    div {
      color: #606c76;
      font-size: 14px;
      font-family: "Helvetica Neue For Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
      box-sizing: border-box;
    }
    .hello {
      margin-top: 10px;
      width: 100%;
      max-width: 500px;
      margin: -30px auto;
    }
    .day {
      font-family: impact;
      color: #ff557d;
      letter-spacing: 4px;
      margin: 0 4px;
    }
    .lover-image {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      letter-spacing: -.33em;
    }
    .lover {
        display: inline-block;
        width: 35px;
        height: 35px;
        color: transparent;
        vertical-align: top;
        background-color: #ddd;
        -webkit-background-size: cover;
        background-size: cover;
        border-radius: 100%;
        box-shadow: inset 0 0 1px rgba(0,0,0,.2);
        margin-right: 2px;
    }
  </style>