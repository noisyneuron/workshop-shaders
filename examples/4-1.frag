#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;
    
    float avg = (normPos.x + normPos.y)/2.;
    
    vec4 color = vec4(avg, avg, avg, 1.0);
    
    gl_FragColor = color;
}