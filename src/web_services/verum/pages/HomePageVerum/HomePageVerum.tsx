import { Button, CircularProgress, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Post } from '../../../../domain/models';
import { HomeVerumContext } from '../context/homeVerumContext';
import PostCard from '../components/PostCard/PostCard';
import { UserStatus } from '../../../../components/UserStatus';
export interface HomePageVerumInterface { }

const HomePageVerum: React.FC<HomePageVerumInterface> = () => {

	const { posts, error, loading, getAllPosts } = useContext(HomeVerumContext);


	return <Container>
		<UserStatus />
		<br />
		<Button
			variant='contained'
			onClick={getAllPosts}
		>
			Get posts
		</Button>

		<div>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '100vh', minWidth: '50vw' }}
			>

				<Grid item xs={3}>
					{loading && <CircularProgress size='100px' />}
					{error && error.name === 'UnexpectedError' ? <div>Ha ocurrido un error</div> : ''}

					{posts && <div>
						{posts.map((post: Post) =>
							<PostCard
								key={post.id}
								post={post}
							/>
						)}
					</div>
					}
				</Grid>

			</Grid>


		</div>
	</Container>;
};

export default HomePageVerum;
