import Index from "@pages/index";
interface iRouter {
  path: string;
  component: Function;
}
const router: Array<iRouter> = [
  {
    path: "/",
    component: Index,
  },
];
export default router;
