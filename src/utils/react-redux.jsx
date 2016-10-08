/**
 * Maps the Redux state to component props, see:
 * @link: https://github.com/reactjs/react-redux/blob/master/docs/api.md#arguments
 */
export function mapStateToProps(state) {
    return {
        user: state.user,
        /**
         * Suppress the missing dispatch error,
         * by defining an empty dispatch by default, see
         * @link: https://github.com/reactjs/react-redux/issues/378#issuecomment-219084641
         */
        dispatch: () => {}
    };
}
