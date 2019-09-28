// TestGuide.js
var common = require('../commonjs/common.js')

var helloData = {
  name:'WeChat'
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    helloData,
    array:[1, 2, 3, 4, 5],
    view: 'Hing',


    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },

  changeName:function(e) {
    this.setData ({
      name: 'Hing'
    })
    common.sayHello('Haha----')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
//指定域名通讯
    // wx.request({
    // url: 'https://www.baid.com',
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})