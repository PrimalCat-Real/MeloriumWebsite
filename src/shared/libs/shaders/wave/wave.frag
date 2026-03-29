uniform float time;
uniform vec2 resolution; 

void main(){
    
    float redColor = sin(time + 0.0) * 0.5 + 0.5;
    float greenColor = sin(time + 2.094) * 0.5 + 0.5;  // +120°
    float blueColor = sin(time + 4.189) * 0.5 + 0.5;  // +240°
    vec3 color = vec3(redColor, greenColor, blueColor);
    gl_FragColor = vec4(color,1.0);
}