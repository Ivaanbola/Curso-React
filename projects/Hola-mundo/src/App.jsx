import TwitterFollowCard from "./components/TwitterFollowCard";
import './App.css';

export default function App() {

    const users = [
        {
          userName: 'midudev',
          name: 'Miguel Ángel Durán',
          isFollowing: true
        },
        {
          userName: 'ivaanbola',
          name: 'Ivan Bolaños',
          isFollowing: false
        },
        {
          userName: 'PacoHdezs',
          name: 'Paco Hdez',
          isFollowing: true
        },
        {
          userName: 'TMChein',
          name: 'Tomas',
          isFollowing: false
        }
      ]

    return (
        <>
            {users.map(user => (
                <TwitterFollowCard key={user.userName} userName={user.userName} name={user.name}  initialIsFollowing={user.isFollowing} />
            ))}
        </>
    );
}
