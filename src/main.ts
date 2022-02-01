import core from '@actions/core'
import github from '@actions/github'

const run = async (): Promise<void> => {
  try {
    const token = core.getInput('token')
    const octokit = github.getOctokit(token)
    const description = github.context.payload.pull_request?.body
    console.log('description', description)
    // core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    // core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
