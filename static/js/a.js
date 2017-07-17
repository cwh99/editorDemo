var TestView = Backbone.View.extend({
    template: null,  //  把模板直接放这里有时也可以，但有时又会出错，还不知道是什么原因
    events: {
        'click button#toggle' : 'toggle'
    },
    initialize: function() {
        this.template = _.template($("#hello-template").html());  //  模板放这里一般没问题
        this.render();
    },
    render: function() {
        this.$el.html(this.template({message: "hello world!"}));  //  渲染模板
        return this;
    },
    toggle: function() {
        this.$("#hello").toggle();
        return this;
    }
});

$(function () {
    var v = new TestView({el: $('#body')});  //  以目标节点（一个 <div id="body" />）为el参数，创建一个view的实例，render函数将会被自动调用并将渲染结果填充到el中
    //v.render(); // 如果没在 initialize 里调用 render 的话，就需要在这里调用一次
});