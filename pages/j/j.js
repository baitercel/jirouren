// pages/j/j.js
var app = getApp()
Page({
  data:{
    info:''
  },
  onLoad:function(options){
    var that = this
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: app.globalData.mainDomain +'/v2/content/j',
      data: {

      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {
        var resData = res.data.data.info
        console.log(resData)
        that.setData({
          info:resData
        })
      }
    });



  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})