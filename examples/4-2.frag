#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 scaledPos = normPos * 5.0;
    vec2 scaledFract = fract(scaledPos);

    float avg;
    // what if, instead of calculating the average with normPos
    // we instead calculated it with the scaledFract ?
    // comment out the following line, and uncomment the next line of code
    avg = (normPos.x + normPos.y)/2.;

    //avg = (scaledFract.x + scaledFract.y)/2.;


    vec4 color = vec4(avg, avg, avg, 1.0);

    gl_FragColor = color;
}
