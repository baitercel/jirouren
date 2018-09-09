//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    data:{}
  },
  scroll:function(e){
    console.log('21')
  },
  //事件处理函数
  previewImg: function(e) {
    var preImg = e.currentTarget.dataset.sectionindex
    wx.previewImage({
      current: preImg, // 当前显示图片的http链接
      urls: [preImg] // 需要预览的图片http链接列表
    });
  },
  onReachBottom: function(e) {
    var that = this
    console.log('下拉1')
    app.globalData.page += 1
    var page = app.globalData.page
    wx.request({
      url: app.globalData.mainDomain +'/ttbq/content/new',
      data: {
        pn:page
      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {
        console.log('下拉2')
        var arr = that.data.data;

        var resData = res.data.data

        arr = resData
        // for (var i = 0; i < resData.length; i++) {
        //     arr.push(resData[i])
        // }

        console.log(arr)

        that.setData({
          data:arr
        })






      }
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this


    wx.request({
      url: app.globalData.mainDomain +'/ttbq/content/new',
      data: {

      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {

        console.log(res.data.message)
        var resData = res.data.data
        console.log(resData)
        that.setData({
          data:resData
        })




      }
    });



  }
})


var GetList = function(that){
  console.log('执行了');
  that.setData({
    hidden:false
  });
  wx.request({
    url:url,
    data:{
      page : page,
      page_size : page_size,
      sort : sort,
      is_easy : is_easy,
      lange_id : lange_id,
      pos_id : pos_id,
      unlearn : unlearn
    },
    success:function(res){
      //console.info(that.data.list);
      var list = that.data.list;
      for(var i = 0; i < res.data.list.length; i++){
        list.push(res.data.list[i]);
      }
      that.setData({
        list : list
      });
      page ++;
      that.setData({
        hidden:true
      });
    }
  });
}


