## Antd流程图

    - 组件(views)
        数据渲染   用户交互、
            把得到的数据传到models(vuex/redux)

    -models(vuex/redux)
        做数据处理   把数据传到services

    -services
        发起请求   utils(拦截器  拦截请求)  

    -mock(后台)
        把数据返回给models(vuex/redux)处理完返回给组件
        