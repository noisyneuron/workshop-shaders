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

    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    float dist = distance(normPos, center);

    if(dist < radius) {

      color = vec4(u_time,0.135,0.400,1.000);

      // u_time is constantly increasing
      // and GLSL only cares for color values between 0 and 1
      // we can use the fract function to deal with this
      // color = vec4( fract(u_time), 0.135, 0.400, 1.000);

    }

    gl_FragColor = color;
}
