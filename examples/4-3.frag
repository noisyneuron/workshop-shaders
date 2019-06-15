#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;
    
    vec2 scaledPos = normPos * 5.;
    vec2 scaledFract = fract(scaledPos);
    
    vec2 center = vec2(0.5);
    
    float radius = 0.3;
    
    vec4 color;
    
    // instead of calculate distance with normPos, 
    // we calculate with scaledFract
    float dist = distance(scaledFract, center);
    
    if(dist < radius) {
        color = vec4(fract(dist*8.0 - u_time),0.135,0.400,1.000);
    }
    
    gl_FragColor = color;
}