class Route {
    constructor(method: string, path: string, handler: (req: Request, res: Response) => void) {
        this.method = method
        this.path = path
        this.handler = handler
    }
   private method: string
    private path: string
    handler: (req: Request, res: Response) => void
}

export 
const routes: Route[] = [
    new Route('GET', '/users', (req, res) => {
        
    })
]