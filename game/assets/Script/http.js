module.exports = {
    GETMAILS: function(obj) {
        var httpRequest = new XMLHttpRequest();
        var time = 5*1000;
        var timeout = false;

        // ��ʱ����
        var timer = setTimeout(function(){
            timeout = true;
            httpRequest.abort();
        }, time);

        var url = obj.url;

        // ��֯�������
        if (typeof obj.data == 'object') {
            console.info('obj.data=' + JSON.stringify(obj.data));
            var kvs = []
            for (var k in obj.data) {
               kvs.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj.data[k]));
            }
            url += '?';
            url += kvs.join('&');
        }

        httpRequest.open(obj.method?obj.method:'GET', url, true);
        
        httpRequest.setRequestHeader("Content-type", "text/plain");//��������ͷ ע��post��ʽ������������ͷ���ڽ������Ӻ���������ͷ��var obj = { name: 'zhansgan', age: 18 };

        httpRequest.send("PATH: /mails METHOD: GET");//�������� ��jsonд��send��

        httpRequest.onreadystatechange = function () {
            var response = httpRequest.responseText;
            console.info('http url cb:' +  url + ' readyState:' + httpRequest.readyState + ' status:' + httpRequest.status);
            clearTimeout(timer);

            if (httpRequest.readyState == 4) {
                console.info('http success:' + url + ' resp:' + response);
                var resJson = JSON.parse(response);
                if (typeof obj.success == 'function') {
                obj.success(resJson);
                }
            } else {
                console.info('http fail:' + url);
                if (typeof obj.fail == 'function') {
                    obj.fail(response);
                }
            }
        };
    },


    PATCHMAILS: function(obj) {
        var httpRequest = new XMLHttpRequest();
        var time = 5*1000;
        var timeout = false;

        // ��ʱ����
        var timer = setTimeout(function(){
            timeout = true;
            httpRequest.abort();
        }, time);

        var url = obj.url;

        // ��֯�������
        if (typeof obj.data == 'object') {
            console.info('obj.data=' + JSON.stringify(obj.data));
            var kvs = []
            for (var k in obj.data) {
               kvs.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj.data[k]));
            }
            url += '?';
            url += kvs.join('&');
        }

        httpRequest.open(obj.method?obj.method:'GET', url, true);
        //jsonͷ��ʽ���������� ��text/plain
        httpRequest.setRequestHeader("Content-type", "text/plain");//��������ͷ ע��post��ʽ������������ͷ���ڽ������Ӻ���������ͷ��var obj = { name: 'zhansgan', age: 18 };

        httpRequest.send("PATH: /mails METHOD: PATCH"+"&"+JSON.stringify(obj.jsonData));//�������� ��jsonд��send��


        httpRequest.onreadystatechange = function () {
            var response = httpRequest.responseText;
            console.info('http url cb:' +  url + ' readyState:' + httpRequest.readyState + ' status:' + httpRequest.status);
            clearTimeout(timer);

            if (httpRequest.readyState == 4) {
                console.info('http success:' + url + ' resp:' + response);
                var resJson = JSON.parse(response);
                if (typeof obj.success == 'function') {
                obj.success(resJson);
                }
            } else {
                console.info('http fail:' + url);
                if (typeof obj.fail == 'function') {
                    obj.fail(response);
                }
            }
        };
    }

}

/*
    request: function(obj) {
        var httpRequest = new XMLHttpRequest();
        var time = 5*1000;
        var timeout = false;

        // ��ʱ����
        var timer = setTimeout(function(){
            timeout = true;
            httpRequest.abort();
        }, time);

        var url = obj.url;

        // ��֯�������
        if (typeof obj.data == 'object') {
            console.info('obj.data=' + JSON.stringify(obj.data));
            var kvs = []
            for (var k in obj.data) {
               kvs.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj.data[k]));
            }
            url += '?';
            url += kvs.join('&');
        }

        httpRequest.open(obj.method?obj.method:'GET', url, true);
        
        httpRequest.send();

        httpRequest.onreadystatechange = function () {
            var response = httpRequest.responseText;
            console.info('http url cb:' +  url + ' readyState:' + httpRequest.readyState + ' status:' + httpRequest.status);
            clearTimeout(timer);

            if (httpRequest.readyState == 4) {
                console.info('http success:' + url + ' resp:' + response);
                var resJson = JSON.parse(response);
                if (typeof obj.success == 'function') {
                obj.success(resJson);
                }
            } else {
                console.info('http fail:' + url);
                if (typeof obj.fail == 'function') {
                    obj.fail(response);
                }
            }
        };
    },
*/