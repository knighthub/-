//index.js
//获取应用实例
const app = getApp()

Page({
    formSubmit: function(e) {
        console.log('点击了提交')
    },
    formReset:function(e){
        console.log('点击了reset')
    },
    bindDateChange:function(e){
        console.log(e.detail.value)
        this.setData({
            date:e.detail.value
        })
    }

})