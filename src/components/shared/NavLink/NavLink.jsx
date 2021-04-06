import { useRouter } from 'next/router';

const NavLink = ({ children, href, ...rest }) => {
  const router = useRouter();

  const activeClassName = router.pathname === href ? 'is-active' : '';

  const classes = `${rest?.className} ${activeClassName}`;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default NavLink;
