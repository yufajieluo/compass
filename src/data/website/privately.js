let addr = '45.76.247.122'
var port_minio = 9000
var port_aria2 = 6808
var port_lychee = 8081
var port_wordpress = 8082

export default {
    title: '私人的',
    name: 'privately',
    nav: [
        {
            icon: './static/images/logo-minio.png',
            name: 'MinIO',
            desc: '对象存储系统',
            link: 'http://' + addr + ':' + port_minio + '/minio/public/'
        },
        {
            icon: './static/images/logo-aria2.png',
            name: 'Aria2',
            desc: 'HTTP/BT下载器',
            link: 'http://' + addr + ':' + port_aria2 + '/'
        },
        {
            icon: './static/images/logo-pao.png',
            name: 'Lychee',
            desc: '图片管理系统',
            link: 'http://' + addr + ':' + port_lychee + '/'
        },
        {
            icon: './static/images/logo-hei.png',
            name: 'WordPress',
            desc: '内容管理系统',
            link: 'http://' + addr + ':' + port_wordpress + '/'
        },
    ]
}
