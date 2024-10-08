/*import publicly from '@/data/website.company/publicly'
import prod from '@/data/website.company/prod'
import test from '@/data/website.company/test'
import dev from '@/data/website.company/dev'

export default {
    publicly,
    prod,
    test,
    dev
}
*/

import data from '../data.json'
export default data

/*
export default {
    data() {
      return {
        config: {}
      };
    },
    created() {
        fetch('/data.json')
        .then(response => {
          if (!response.ok) {
            console.error('-xxxxxxxxxxxxxxxxx 0')
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          console.error('-xxxxxxxxxxxxxxxxx 1')
          return response.json();
        })
        .then(data => {
            console.error('-xxxxxxxxxxxxxxxxx 2')
          this.config = data;
        })
        .catch(error => {
          console.error('Error loading config:', error);
        });
    }
};
*/

/*
export default {
    "ps-cna": {
        "title": "ps-cna",
        "name": "env-ps-cna",
        "nav": [
            {
                "icon": "./static/images/logo-wr.png",
                "name": "Studio",
                "desc": "studio",
                "link": "https://cna.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-vault.png",
                "name": "Vault",
                "desc": "vault",
                "link": "https://vault.cna.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-cloudify.png",
                "name": "Conductor",
                "desc": "conductor",
                "link": "https://conductor.cna.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-minio.png",
                "name": "Minio",
                "desc": "minio",
                "link": "https://minio.cna.wrstudio.cloud:9001/"
            },
            {
                "icon": "./static/images/logo-harbor.png",
                "name": "Harbor",
                "desc": "harbor",
                "link": "https://registry.ide.cn.wrstudio.cloud/"
            }
        ]
    },
    "ps-cnb": {
        "title": "ps-cnb",
        "name": "env-ps-cnb",
        "nav": [
            {
                "icon": "./static/images/logo-wr.png",
                "name": "Studio",
                "desc": "studio",
                "link": "https://cnb.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-vault.png",
                "name": "Vault",
                "desc": "vault",
                "link": "https://vault.cnb.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-cloudify.png",
                "name": "Conductor",
                "desc": "conductor",
                "link": "https://conductor.cnb.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-minio.png",
                "name": "Minio",
                "desc": "minio",
                "link": "https://minio.cn2.wrstudio.cloud:9001/"
            },
            {
                "icon": "./static/images/logo-harbor.png",
                "name": "Harbor",
                "desc": "harbor",
                "link": "https://registry.ide.cn.wrstudio.cloud/"
            }
        ]
    },
    "ps-cn2": {
        "title": "ps-cn2",
        "name": "env-ps-cn2",
        "nav": [
            {
                "icon": "./static/images/logo-wr.png",
                "name": "Studio",
                "desc": "studio",
                "link": "https://cn2.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-vault.png",
                "name": "Vault",
                "desc": "vault",
                "link": "https://vault.cn2.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-cloudify.png",
                "name": "Conductor",
                "desc": "conductor",
                "link": "https://conductor.cn2.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-minio.png",
                "name": "Minio",
                "desc": "minio",
                "link": "https://minio.cn2.wrstudio.cloud:9001/"
            },
            {
                "icon": "./static/images/logo-harbor.png",
                "name": "Harbor",
                "desc": "harbor",
                "link": "https://registry.ide.cn.wrstudio.cloud/"
            }
        ]
    },
    "ps-cn3": {
        "title": "ps-cn3",
        "name": "env-ps-cn3",
        "nav": [
            {
                "icon": "./static/images/logo-wr.png",
                "name": "Studio",
                "desc": "studio",
                "link": "https://cn3.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-vault.png",
                "name": "Vault",
                "desc": "vault",
                "link": "https://vault.cn3.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-cloudify.png",
                "name": "Conductor",
                "desc": "conductor",
                "link": "https://conductor.cn3.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-minio.png",
                "name": "Minio",
                "desc": "minio",
                "link": "https://minio.cn3.wrstudio.cloud:9001/"
            },
            {
                "icon": "./static/images/logo-harbor.png",
                "name": "Harbor",
                "desc": "harbor",
                "link": "https://registry.ide.cn.wrstudio.cloud/"
            }
        ]
    },
    "staging": {
        "title": "staging",
        "name": "staging",
        "nav": [
            {
                "icon": "./static/images/logo-wr.png",
                "name": "Studio",
                "desc": "studio",
                "link": "https://stagingcn.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-vault.png",
                "name": "Vault",
                "desc": "vault",
                "link": "https://vault.stagingcn.wrstudio.cloud/"
            },
            {
                "icon": "./static/images/logo-cloudify.png",
                "name": "Conductor",
                "desc": "conductor",
                "link": "https://128.224.158.72/"
            },
            {
                "icon": "./static/images/logo-minio.png",
                "name": "Minio",
                "desc": "minio",
                "link": "https://pek-studio-2.wrs.com:9101/"
            },
            {
                "icon": "./static/images/logo-harbor.png",
                "name": "Harbor",
                "desc": "harbor",
                "link": "https://registry.ide.cn.wrstudio.cloud/"
            }
        ]
    }
}
*/
