//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    end:function(e){
      console.log('yes')// success
    },
    navItems:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (res) {
    console.log(res.mark)
    var that = this
    wx.request({
      url: app.globalData.mainDomain +'/v2/content/y',
      data: {
        mark:res.mark
      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {

        var resData = res.data.data
        console.log(resData)
        //填充数据
        that.setData({
                navItems:resData
        })

      }
    });
    
  }
})
