//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
       
    },
   
    suo: function(e) {
        wx.navigateTo({
            url: 'pages/tab1/category1/category1',
        })
    },
    category1: function(e) {
        wx.navigateTo({
            url: 'category1/category1',
        })
    },
    category2: function (e) {
        wx.navigateTo({
            url: 'category2/category2',
        })
    },
    category3: function (e) {
        wx.navigateTo({
            url: 'category3/category3',
        })
    },
    category4: function (e) {
        wx.navigateTo({
            url: 'category4/category4',
        })
    },
    category5: function (e) {
        wx.navigateTo({
            url: 'category5/category5',
        })
    },
   
})