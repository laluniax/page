
// 그냥 class로 오브젝트 찍어내보리기
class Grid {

    constructor(el, row = 10, col = 10) {
        this.element = el;
        this.row = row;
        this.col = col;

        this.element.style.setProperty("--row",this.row);
        this.element.style.setProperty("--col",this.col);

        this.randomIntBetween = (min,max)=>{
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
    }

    animate() {
        const duration = 2000;
        const x = this.col - 1;
        const y = this.row - 1;
        for (let i = 0; i< this.row; i++) {
            for(let j = 0; j < this.col; j++) {
                const fragment = document.createElement("div");
                fragment.className = "fragment";
                fragment.style.setProperty("--x",j);
                fragment.style.setProperty("--y", i );

                const delay = ( x + y ) / 2 - Math.abs((x+y) / 2 - ( j + i) );
                
                const Odd = ( i + j ) % 2 ===0;
                fragment.style.setProperty("--delay", delay * 70 +'ms');
                fragment.style.setProperty("--duration", duration +'ms');
                fragment.style.setProperty("--rotateX", `rotateX(${Odd ? - 180 : 0 }deg)`);
                fragment.style.setProperty("--rotateY", `rotateY(${Odd ? 0 : -180}deg)`);
                this.element.appendChild(fragment);

                const timer = setTimeout(()=>{
                    fragment.style.willChange = 'initial';
                    fragment.style.transform = 'initial';
                    fragment.style.animation = 'initial';
                    fragment.style.backfaceVisibility = 'initial';
                    clearTimeout(timer);
                }, duration + delay * 70)
            }
        }
    }
}

const box = document.querySelector("#grid");
// box를 넣은 것은 내가 파라미터에 구멍 뚫어놓아서
new Grid(box).animate();

