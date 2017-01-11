var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ut, st = Date.now(), um, mouseX = 0, mouseY = 0;

    function initShaders (gl, vertexShaderId, fragmentShaderId) {
        var vertexEl = document.querySelector(vertexShaderId);
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexEl.text);
        gl.compileShader(vertexShader);

        var fragmentEl = document.querySelector(fragmentShaderId);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentEl.text);
        gl.compileShader(fragmentShader);

        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        return program;
    }

    function initGraphics () {
        gl = canvas.getContext('webgl');
        var width = canvas.width;
        var height = canvas.height;
        gl.viewport(0, 0, width, height);
        
        canvas.addEventListener('mousemove', function (e) {
          mouseX = e.pageX / canvas.width;
          mouseY = e.pageY / canvas.height;
        }, false);
      
        var program = initShaders(gl, '#sv', '#sf');
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

        gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array([-1, 1, -1, -1, 1, -1, 1, 1]),
                gl.STATIC_DRAW
        );

        var vPosition = gl.getAttribLocation(program, 'vPosition');
        gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vPosition);

        ut = gl.getUniformLocation(program, 'time');
      um = gl.getUniformLocation(program, 'mouse');
        var resolution = new Float32Array([canvas.width, canvas.height]);
        gl.uniform2fv(gl.getUniformLocation(program, 'resolution'), resolution);
    }

    function render () {
        gl.uniform1f(ut, (Date.now() - st) / 1000);
      gl.uniform2fv(um, new Float32Array([mouseX, mouseY]));
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        requestAnimationFrame(render);
    }

    initGraphics();
    render();