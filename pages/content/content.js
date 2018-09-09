//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navTab:'',
    currentNavtab:"",
    Info:'',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tiao:function(e){
         console.log(e.currentTarget.dataset.mark)
              wx.navigateTo({
                      url: '../info/info?mark='+e.currentTarget.dataset.mark,//页面跳转相对路径要写清楚且准确
                      success: function(res){
                        console.log('跳转到news页面成功')// success
                      },
                      fail: function() {
                      console.log('跳转到news页面失败')  // fail
                      },
                      complete: function() {
                        console.log('跳转到news页面完成') // complete
                      }
              })
  },
   switchTab: function(e){

     console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  onLoad: function (res) {
    var that = this
    console.log(res.mark)
    wx.request({
      url: app.globalData.mainDomain +'/v2/content/data',
      data: {
        mark:res.mark
      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {

        var resData = res.data.data
        console.log(resData.info[0].key)
        //设置导航
        that.setData({
                navTab:resData.type
        })


        //默认导航
        that.setData({
          currentNavtab:resData.type[0].id
        })
        

        //设置数据
        that.setData({
          Info:resData.info
        })




      }
    });


  }
})
