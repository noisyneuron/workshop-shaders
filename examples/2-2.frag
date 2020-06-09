#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    // This gives vertical gradients. How do we get horizontal gradients?
    vec4 color1 = vec4(normPos.y, .2, 0.4, 1.0);
    vec4 color2 = vec4(1.0, normPos.y, 0.0, 1.0);

    vec4 color;

    if(normPos.x < 0.5) {
        color = color1;
    } else {
        color = color2;
    }

    gl_FragColor = color;
}
