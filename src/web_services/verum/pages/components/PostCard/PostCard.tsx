import { Card, CardActions, CardContent, Stack, Typography } from '@mui/material';

import { Post } from '../../../../../domain/models';

export interface PostCardProps {
	post: Post,
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {

	return <Card
		sx={{ minWidth: 275, backgroundColor: 'yellow', margin: '20px' }}>
		<CardContent>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				spacing={2}
			>
				<div>
					<Typography variant="h5" component="div">
						Post
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{`Title: ${post.title}`}
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{`Body: ${post.body}`}
					</Typography>
				</div>


			</Stack>

		</CardContent>
		<CardActions>
		</CardActions>
	</Card>
};

export default PostCard;
