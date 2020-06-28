import { JobAllPage, JobSave, JobUpdate, JobDelete, JobDeleteIds, JobExport, JobUpload, JobExecutor } from "@/api/bootAdmin/monitor/job"

export default {
    namespaced: true,
    actions: {
        /**
         * 获取分页后的定时任务
         * @param {context} dispatch 
         * @param {*} url,data
         */
        jobAllPage({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobAllPage(url, data).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        /**
        * 新增定时任务
        * @param {context} dispatch 
        * @param {*} url,data
        */
        jobSave({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobSave(url, data).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        /**
         * 更新定时任务
         * @param {context} dispatch 
         * @param {*} url,data
         */
        jobUpdate({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobUpdate(url, data).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        /**
         * 删除定时任务
         * @param {context} dispatch 
         * @param {*} url,data
         */
        jobDelete({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobDelete(url, data).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        /**
        * 删除定时任务
        * @param {context} dispatch 
        * @param {*} url,data
        */
        jobDeleteIds({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobDeleteIds(url, data).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        /**
         * 任务调度导出
         * 已过时(请勿使用)
         * @param {*} param0 
         * @param {*} param1 
         */
        jobExport({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobExport(url, data).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        /**
         * 文件上传
         */
        jobUpload({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobUpload(url, data).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        /**
         * 立即执行
         * @param {*} param0 
         * @param {*} param1 
         */
        jobExecutor({ dispatch }, { url, data }) {
            return new Promise((resolve, reject) => {
                JobExecutor(url, data).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}