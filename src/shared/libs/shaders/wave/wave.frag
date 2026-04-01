uniform float time;
uniform vec2 resolution; 

void main(){
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    vec2 centered = uv; // кординаты центра
    float radius = sin(time) * 0.5 +0.5;
    float dist = length(uv);          
    float rings = fract(dist * 5.0 - time * 0.5);
    float new_circle = smoothstep(radius, radius-0.01, rings);
    
    gl_FragColor = vec4(rings, 0.0, 0.0, 1.0);
}