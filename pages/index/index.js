//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    navItems:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    wx.login({
                            success: function (e) {

                                console.log('wxlogin successd........');
                                  var code = e.code;
                                  wx.getUserInfo({
                                      success: function (res) {
                                          console.log('wxgetUserInfo successd........');
                                          var encryptedData = encodeURIComponent(res.encryptedData);
                                          console.log(code);
                                          console.log(encryptedData);
                                          console.log(res.iv);
                                          wx.request({
                                            url: app.globalData.mainDomain +'/v1/c/l',
                                            data: {
                                              code: e.code,
                                              encryptedData:encryptedData,
                                              iv:res.iv
                                            },
                                            success:function(result){
                                                console.log(result.data.data)
                                            }
                                          })
                                      }
                                  })
                            }
                                    
                        });




    console.log('onLoad')
    var that = this
    
    wx.request({
      url: app.globalData.mainDomain+'/v2/content/plan',
      data: {

      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {
        var resData = res.data.data
        console.log(resData)
        that.setData({
          navItems:resData
        })
      }
    });




  }
})
