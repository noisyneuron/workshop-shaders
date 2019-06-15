#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;
    
    vec2 center = vec2(0.5, 0.5);
    
    float radius = 0.3;
    
    vec4 color;
    
    float dist = distance(normPos, center);
    
    if(dist < radius) {
        
        
      // lets bring the gradient back into the mix though, 
      // by having the red component depend on both, time and distance from center
      color = vec4(fract(dist + u_time),0.135,0.400,1.000);
        
      // we can change the direction of the animation by subtracting time instead
      // even though things will go into the negatives, the fract function won't care
      // color = vec4(fract(dist - u_time),0.135,0.400,1.000);
        
      // by scaling the distance, we see the gradient repeated
      // because of the repetitive nature of the fract function
      // color = vec4(fract(dist*8.0 - u_time),0.135,0.400,1.000);
        
      // we can remove time to see this repetition better, 
      // and adjust the scaling factor for more or less repetition
      // color = vec4(fract(dist*8.0),0.135,0.400,1.000);
        
    }
    
    gl_FragColor = color;
}