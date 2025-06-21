const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot6x5uk/",
            name: "springboot6x5uk",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot6x5uk/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线外卖系统"
        } 
    }
}
export default base
